import React from 'react';
import { Provider } from 'react-redux';
import MainContainer from 'containers/MainContainer.js';
import store from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
