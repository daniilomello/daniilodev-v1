import React from 'react';
import { About } from '../../Components/About/About';
import { Navigation } from '../../Components/Navigation/Navigation';
import { HomePage } from './Style';

export const Home = () => {
  return (
    <HomePage>
      <About />
      <Navigation />
    </HomePage>
  );
};
