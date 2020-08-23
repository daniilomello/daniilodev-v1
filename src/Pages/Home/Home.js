import React from 'react';
import { About } from '../../Components/About/About';
import { Navigation } from '../../Components/Navigation/Navigation';
import { HomePage } from './Style';
import { hotjar } from 'react-hotjar';

export const Home = () => {
  React.useEffect(() => {
    hotjar.initialize(956771, 6);
  }, []);

  return (
    <HomePage>
      <About />
      <Navigation />
    </HomePage>
  );
};
