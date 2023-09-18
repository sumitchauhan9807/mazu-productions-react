import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux/store'
import Website from 'views/website/router'
import ModelDashboard from 'views/Model/router'
import { useHistory ,useLocation } from 'react-router-dom';
import IndexWeb from 'views/index'


function App() {
  const onBeforeLift = () =>{
    console.log("onBeforeLift")
  }
  const location = useLocation()
  let currentPath = location.pathname
  return (
    <Provider store={store().store}>
      <PersistGate loading={'Loading'} persistor={store().persistor}>
          <IndexWeb/>
      </PersistGate>
    </Provider>
  );
}

export default App;
