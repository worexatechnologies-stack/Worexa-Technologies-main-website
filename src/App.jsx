import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

// --- DIRECT PAGE IMPORTS ---
import Home from './pages/Home';
import BestMarketingCompany from './pages/BestMarketingCompany';

// --- LAZY-LOADED PAGES (code-split per secondary route) ---
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Article = React.lazy(() => import('./pages/Article'));
const Articles = React.lazy(() => import('./pages/Articles'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Careers = React.lazy(() => import('./pages/Careers'));

// --- LAZY-LOADED SERVICE PAGES ---
const SEO = React.lazy(() => import('./pages/services/SEO'));
const GoogleAds = React.lazy(() => import('./pages/services/googleads'));
const SocialMedia = React.lazy(() => import('./pages/services/socialmedia'));
const ContentMarketing = React.lazy(() => import('./pages/services/contentmarketing'));
const Branding = React.lazy(() => import('./pages/services/branding'));
const Website = React.lazy(() => import('./pages/services/website'));
const Uiux = React.lazy(() => import('./pages/services/uiux'));
const Photoshoot = React.lazy(() => import('./pages/services/photoshoot'));
const OfflineAdvertising = React.lazy(() => import('./pages/services/OfflineAdvertising'));
const PublicRelations = React.lazy(() => import('./pages/services/PublicRelations'));
const TermsAndConditions = React.lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const raf = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });

      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 60);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-8 h-8 border-3 border-orange-600 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/articles" element={<Articles />} />       
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
         
          
          {/* Sub-Routes for individual services */}
          <Route path="/services/search-engine-optimization-seo" element={<SEO />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/performance-marketing" element={<GoogleAds />} />
          <Route path="/services/social-media-marketing" element={<SocialMedia />} /> 
          <Route path="/services/meta-ads" element={<SocialMedia />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/content-creation" element={<ContentMarketing />} />
          <Route path="/services/branding-and-creative-strategy" element={<Branding />} />
          <Route path="/services/web-development" element={<Website />} />
          <Route path="/services/ui-ux-and-cro" element={<Uiux />} />

          <Route path="/services/photoshoot" element={<Photoshoot />} />
          <Route path="/services/offline-advertising" element={<OfflineAdvertising />} />
          <Route path="/services/public-relations" element={<PublicRelations />} />
          <Route path="/best-marketing-company-in-bangalore" element={<BestMarketingCompany />} />
          <Route path="/best-marketing-and-advertising-company-in-bangalore" element={<BestMarketingCompany />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
