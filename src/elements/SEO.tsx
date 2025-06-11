import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { URL, initialValues, pages } from "../utils/seo";
import { blogs } from "../pages/blogPage/blog-collection";

interface SEOProps {
  children: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const location = useLocation();
  const route = location.pathname;

  const { initial_title, initial_description, initial_image } = initialValues;

  const cleanPath = (path: string): string => {
    return path.replace(/^\/(en|ru|sr)(\/|$)/, "/");
  };

  useEffect(() => {
    const cleanRoute = cleanPath(route);
    const isBlogRoute = cleanRoute.startsWith("/blog/");

    let _title, _description, _image, _canonicalUrl;

    if (isBlogRoute) {
      const blogSlugFromUrl = cleanRoute.split("/")[2];
      const blogData = blogs.find(
        (blog) => blog.slugs?.[currentLanguage] === blogSlugFromUrl
      );

      _title = t(
        blogData
          ? `BlogPage.blogs.blog_${blogData.id}.blog_${blogData.id}_title`
          : `SEO.${initial_title}`
      );
      _description = t(
        blogData
          ? `BlogPage.blogs.blog_${blogData.id}.blog_${blogData.id}_description`
          : `SEO.${initial_description}`
      );
      _image = blogData ? blogData.image : initial_image;
    } else {
      const page = pages.find((page) => page.route === cleanRoute);
      _title = t(`SEO.${page?.title || initial_title}`);
      _description = t(`SEO.${page?.description || initial_description}`);
      _image = page?.image || initial_image;
    }

    _canonicalUrl = `${URL}${route}`;

    // update meta tags and document title
    document.title = _title;
    updateMetaTag("description", _description);
    updateMetaTag("og:title", _title, true);
    updateMetaTag("og:description", _description, true);
    updateMetaTag("og:image", `${URL}${_image}`, true);
    updateMetaTag("og:url", _canonicalUrl, true);
    updateLinkTag("canonical", _canonicalUrl);
  }, [route, currentLanguage]);

  const updateMetaTag = (
    key: string,
    content: string,
    isProperty: boolean = false
  ) => {
    const selector = isProperty
      ? `meta[property="${key}"]`
      : `meta[name="${key}"]`;
    let meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(isProperty ? "property" : "name", key);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  const updateLinkTag = (rel: string, href: string) => {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  };

  return <>{children}</>;
};

export default SEO;
