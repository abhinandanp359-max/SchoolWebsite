import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SchemaMarkup from './SchemaMarkup';

const PageLayout = ({ title, description, canonical, children, className = '', schema = true }) => {
  const location = useLocation();
  const baseUrl = 'https://mountcarmelschool.edu.in';
  const fullTitle = title ? `${title} | Mount Carmel School` : 'Mount Carmel School | Growing in Knowledge, Values and Compassion';
  const metaDescription = description || 'Mount Carmel School - A Christian missionary school committed to education, values, character, service, compassion, and excellence.';
  const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;
  const ogImage = `${baseUrl}/images/hero/banner.webp`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {schema && <SchemaMarkup page={{ title, description: metaDescription, path: location.pathname }} />}
      <div className={className}>
        {children}
      </div>
    </>
  );
};

export default PageLayout;
