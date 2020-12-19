import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div className='App'>
      
      <Route exact path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPage} />
    </div>
  );
}


export default App;
