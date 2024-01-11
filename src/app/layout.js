import React from 'react';
import '@fontsource/inter'; // Import the Inter font CSS file
import { metadata } from './metadata';
import Head from 'next/head';

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags if needed */}
      </Head>
      {children}
    </>
  );
}

export default RootLayout;
