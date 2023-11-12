import React from 'react';
import Router from "./components/router/Router";
import { Provider } from 'react-redux'
import {store} from "./redux/store";

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
