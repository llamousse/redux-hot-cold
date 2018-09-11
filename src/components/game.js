import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <GuessSection />
        <StatusSection />
        <InfoSection />
      </main>
    </div>
  );
}
