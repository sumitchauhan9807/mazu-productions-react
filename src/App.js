import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux/store'
import Website from 'views/website/router'
import ModelDashboard from 'views/Model/router'
import { useHistory ,useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  let currentPath = location.pathname
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
          {!currentPath.includes('dashboard') && <Website/>}
          {currentPath.includes('dashboard') && <ModelDashboard/>}
      </PersistGate>
    </Provider>
  );
}

export default App;
