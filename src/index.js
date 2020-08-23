import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TagManager from 'react-gtm-module';
import { hotjar } from 'react-hotjar';

const tagManagerArgs = {
  gtmId: 'GTM-W89NH7X',
};

TagManager.initialize(tagManagerArgs);
hotjar.initialize(956771, 6);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
