import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import MainPage from './pages/mainPage/MainPage';
import ApproachPage from './pages/approachPage/ApproachPage';
import ProgramPage from './pages/programPage/ProgramPage';
import PricingPage from './pages/pricingPage/PricingPage';
import EnrollPage from './pages/enrollPage/EnrollPage';
import BlogPage from './pages/blogPage/BlogPage';
import BlogDetailPage from './pages/blogPage/BlogDetailPage';
import NavBar from './elements/NavBar';
import FooterFrame from './elements/FooterFrame';
import SEO from './elements/SEO';
import theme from './elements/Theme';
import './assets/fonts.css';
import 'normalize.css';
import './i18n';

const history = createBrowserHistory();

function App() {
  const { i18n } = useTranslation();

  const renderWithLanguage = (Component: any, lng: any) => (props: any) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
    return <Component {...props} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <SEO>
          <NavBar />
          <Switch>
            <Route exact path="/" render={renderWithLanguage(MainPage, 'en')} />
            <Route path="/approach" render={renderWithLanguage(ApproachPage, 'en')} />
            <Route path="/our-program" render={renderWithLanguage(ProgramPage, 'en')} />
            <Route path="/pricing" render={renderWithLanguage(PricingPage, 'en')} />
            <Route path="/enroll" render={renderWithLanguage(EnrollPage, 'en')} />
            <Route exact path="/blog" render={renderWithLanguage(BlogPage, 'en')} />
            <Route exact path="/blog/:slug" render={renderWithLanguage(BlogDetailPage, 'en')} />

            <Route exact path="/ru" render={renderWithLanguage(MainPage, 'ru')} />
            <Route path="/ru/approach" render={renderWithLanguage(ApproachPage, 'ru')} />
            <Route path="/ru/our-program" render={renderWithLanguage(ProgramPage, 'ru')} />
            <Route path="/ru/pricing" render={renderWithLanguage(PricingPage, 'ru')} />
            <Route path="/ru/enroll" render={renderWithLanguage(EnrollPage, 'ru')} />
            <Route exact path="/ru/blog" render={renderWithLanguage(BlogPage, 'ru')} />
            <Route exact path="/ru/blog/:slug" render={renderWithLanguage(BlogDetailPage, 'ru')} />

            <Route exact path="/sr" render={renderWithLanguage(MainPage, 'sr')} />
            <Route path="/sr/approach" render={renderWithLanguage(ApproachPage, 'sr')} />
            <Route path="/sr/our-program" render={renderWithLanguage(ProgramPage, 'sr')} />
            <Route path="/sr/pricing" render={renderWithLanguage(PricingPage, 'sr')} />
            <Route path="/sr/enroll" render={renderWithLanguage(EnrollPage, 'sr')} />
            <Route exact path="/sr/blog" render={renderWithLanguage(BlogPage, 'sr')} />
            <Route exact path="/sr/blog/:slug" render={renderWithLanguage(BlogDetailPage, 'sr')} />
            
            <Redirect from="*" to="/" />
          </Switch>
          <FooterFrame />
        </SEO>
      </Router>
    </ThemeProvider>
  );
}

export default App;
