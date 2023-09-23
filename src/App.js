import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux/store'
import { useHistory ,useLocation } from 'react-router-dom';
import IndexWeb from 'views/index'


function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={'Loading'} persistor={store().persistor}>
          <IndexWeb/>
      </PersistGate>
    </Provider>
  );
}

export default App;
