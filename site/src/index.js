import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import Root from './Root';

const rootEl = document.getElementById('root');
render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Root /> here rather than require() a <NextApp />.
    const NextRoot = require('./Root').default;
    render(
      <AppContainer>
         <NextRoot />
      </AppContainer>,
      rootEl
    );
  });
}
