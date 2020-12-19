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
      <Route exact path= component={HomePage} />
    </div>
  );
}


export default App;
