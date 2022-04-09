import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Header/>
       <Router>
       <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
