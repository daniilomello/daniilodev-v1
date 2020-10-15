import React from 'react';
import { About } from '../../Components/About/about.component';
import { Navigation } from '../../Components/Navigation/navigation.component';
import { HomePage } from './home.style';

export const Home = () => {
  return (
    <HomePage>
      <About />
      <Navigation />
    </HomePage>
  );
};
