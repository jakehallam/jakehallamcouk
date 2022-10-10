import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Footer from '../components/footer';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />

    <Hero
      name="404"
      title="Page not found"
      description="The link is broken or the page has been moved."
      button={(
        <a href="/" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
        Back to homepage
        </a>
      )}
    />

    <Footer />
  </Layout>
);

export default NotFoundPage;
