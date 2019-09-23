import React from 'react';

import './WelcomeBanner.scss';

const WelcomeBanner: React.FC<{}> = () => (
  <div id='welcome-banner'>
    <h1 id='site-title'>Jantix</h1>
    <p id='short-description'>
      A library for creating simple, fully typed Redux architectures with TypeScript
    </p>
  </div>
);

export default WelcomeBanner;
