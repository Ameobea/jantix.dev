import React from 'react';

import Layout from '../components/Layout';
import WelcomeBanner from '../components/WelcomeBanner';
import SEO from '../components/seo';

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SEO title='Home' />
    <WelcomeBanner />
  </Layout>
);

export default IndexPage;
