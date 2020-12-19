import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';

import './App.css';


const HatsPage = () => {

  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}
function App() {
  return (
    <div className='App'>
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage} />
      </Switch>
    </div>
  );
}


export default App;
