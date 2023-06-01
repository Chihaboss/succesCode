
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Landing from './Screen/Landing';


export default function App() {
  return (

    <Provider store={store}>

    <Landing />
    
    </Provider>
    
  );
}


