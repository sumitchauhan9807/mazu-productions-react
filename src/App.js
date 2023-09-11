import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux/store'
import {Routes , Route } from "react-router-dom"; 
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './views/Main'
import Actor from './views/Actor'

import Test from './views/Test'
import {getUserAddress} from './helpers'
function App() {
  //  getUserAddress()
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
      <React.Fragment>
        <Header/>
          <Routes> 
            <Route exact path ="/" element= {<Main/>}/> 
            <Route exact path ="/actor/:id" element= {<Actor />}/> 
            <Route exact path ="/test" element= {<Test />}/> 
          </Routes>
        <Footer/>
      </React.Fragment>
      </PersistGate>
    </Provider>
  );
}

export default App;
