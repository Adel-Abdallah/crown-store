import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './/shop/shop.component.jsx';

import './App.css';



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
