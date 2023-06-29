import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../Reducers/index';
import LoginScreen from './components/LoginScreen';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <LoginScreen />
  </Provider>
);

export default App;
