import React from 'react';
import { About } from '../../Components/About/About';
import { Navigation } from '../../Components/Navigation/Navigation';
import { HomePage } from './Style';
import { hotjar } from 'react-hotjar';
import { TagManager } from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-W89NH7X',
};

export const Home = () => {
  React.useEffect(() => {
    hotjar.initialize(956771, 6);
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <HomePage>
      <About />
      <Navigation />
    </HomePage>
  );
};
