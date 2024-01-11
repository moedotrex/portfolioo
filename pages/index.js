// Index.js

import Page from './page';

import React from 'react';
import RootLayout from '../src/app/layout';

function Home() {
  return (
    <RootLayout>
      <Page />;
    </RootLayout>
  );
}

export default Home;