import React from 'react';
import '../src/app/globals.css';  // Adjust the path based on your project structure
import RootLayout from '../src/app/layout';

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
