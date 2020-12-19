import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';


const homePage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div className='App'>
      <RouteHomePage />
    </div>
  );
}


export default App;
