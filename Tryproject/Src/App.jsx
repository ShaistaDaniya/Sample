// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LoginContainer from './containers/LoginContainer';

const App = () => {
  return (
    <Provider store={store}>
      <LoginContainer />
    </Provider>
  );
};

export default App;
