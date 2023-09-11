import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {BrowserRouter} from "react-router-dom" 
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const client = new ApolloClient({
  uri: 'https://flirttool.com/graphql',
  cache: new InMemoryCache(),
});

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  // you can also just use 'scale'
  transition: transitions.FADE
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ApolloProvider client={client}>
      <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
        </AlertProvider>
      </BrowserRouter>
    </ApolloProvider>
  
);
