import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-W89NH7X',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
