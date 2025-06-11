import { useTranslation } from "react-i18next";
import { Typography, useMediaQuery } from "@mui/material";
import { Blog } from "./blog-collection";
import theme from "../../elements/Theme";

const BlogContent: React.FC<{ blogData: Blog }> = ({ blogData }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const withLineBreaks = (text: string) => {
    if (text.includes("\n")) {
      return text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index < text.split("\n").length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </span>
      ));
    }
    return text;
  };

  return (
    <div>
      <Typography variant="h5" textAlign="start" mt="20px">
        {withLineBreaks(
          t(`BlogPage.blogs.blog_${blogData.id}.${blogData.introductionKey}`)
        )}
      </Typography>
      {blogData.sections.map((section) => (
        <>
          {section.section_titleKey && (
            <Typography variant="h4" fontFamily="Open Sans Bold" mt="50px">
              {t(
                `BlogPage.blogs.blog_${blogData.id}.${section.section_titleKey}`
              )}
            </Typography>
          )}
          {section.section_textKey && (
            <Typography variant="h5" textAlign="start" mt="20px">
              {withLineBreaks(
                t(
                  `BlogPage.blogs.blog_${blogData.id}.${section.section_textKey}`
                )
              )}
            </Typography>
          )}
          {section.content.map((item) => (
            <>
              <Typography
                variant="h5"
                textAlign={isMobile ? "start" : "center"}
                fontFamily="Open Sans Bold"
                mt={isMobile ? "40px" : "50px"}
              >
                {t(
                  `BlogPage.blogs.blog_${blogData.id}.${item.content_titleKey}`
                )}
              </Typography>
              {item.content_textKey && (
                <Typography variant="h5" textAlign="start" mt="20px">
                  {withLineBreaks(
                    t(
                      `BlogPage.blogs.blog_${blogData.id}.${item.content_textKey}`
                    )
                  )}
                </Typography>
              )}
              {item.sub_sections &&
                item.sub_sections.map((sub_section) => (
                  <div
                  // style={{ marginTop: "40px" }}
                  >
                    {sub_section.sub_section_titleKey && (
                      <Typography
                        variant="h5"
                        fontFamily="Open Sans Bold"
                        textAlign="start"
                        mt="40px"
                      >
                        {t(
                          `BlogPage.blogs.blog_${blogData.id}.${sub_section.sub_section_titleKey}`
                        )}
                      </Typography>
                    )}
                    {sub_section.sub_section_textKey && (
                      <Typography variant="h5" textAlign="start" mt="20px">
                        {t(
                          `BlogPage.blogs.blog_${blogData.id}.${sub_section.sub_section_textKey}`
                        )}
                      </Typography>
                    )}
                    {sub_section.sub_content.length === 1
                      ? sub_section.sub_content.map((sub_item) => (
                          <Typography variant="h5" textAlign="start" mt="20px">
                            {t(
                              `BlogPage.blogs.blog_${blogData.id}.${sub_item.sub_content_textKey}`
                            )}
                          </Typography>
                        ))
                      : sub_section.sub_content.map((sub_item) => (
                          <div>
                            <Typography
                              variant="h5"
                              textAlign="start"
                              mt="15px"
                            >
                              {(t(
                                `BlogPage.blogs.blog_${blogData.id}.${sub_item.sub_content_titleKey}`
                              ) ||
                                t(
                                  `BlogPage.blogs.blog_${blogData.id}.${sub_item.sub_content_textKey}`
                                )) &&
                                "• "}
                              {sub_item.sub_content_titleKey && (
                                <>
                                  <b>
                                    {t(
                                      `BlogPage.blogs.blog_${blogData.id}.${sub_item.sub_content_titleKey}`
                                    )}
                                  </b>{" "}
                                </>
                              )}
                              {t(
                                `BlogPage.blogs.blog_${blogData.id}.${sub_item.sub_content_textKey}`
                              )}
                            </Typography>
                          </div>
                        ))}
                    {/* {sub_section.sub_section_titleKey && (
                      <>
                        <br />
                        <br />
                      </>
                    )} */}
                  </div>
                ))}
              {item.content_text_belowKey && (
                <Typography variant="h5" textAlign="start" mt="20px">
                  {withLineBreaks(
                    t(
                      `BlogPage.blogs.blog_${blogData.id}.${item.content_text_belowKey}`
                    )
                  )}
                </Typography>
              )}
            </>
          ))}
        </>
      ))}
      {blogData.conclusionKey && (
        <>
          <Typography
            variant="h4"
            textAlign="start"
            fontFamily="Open Sans Bold"
            mt="50px"
          >
            {t("BlogPage.Conclusion")}
          </Typography>
          <Typography variant="h5" textAlign="start" mt="20px">
            {withLineBreaks(
              t(`BlogPage.blogs.blog_${blogData.id}.${blogData.conclusionKey}`)
            )}
          </Typography>
        </>
      )}
      <br />
      <br />
    </div>
  );
};

export default BlogContent;
