import React from 'react'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchApi from './components/SearchApi';
import About from './components/About';
import PopularSearches from './components/PopularSearches'
import SearchVideo from './components/SearchVideo';

const App = () => {
  return (
      <Router>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/searchApi">
              <SearchApi />
            </Route>
            <Route exact path="/popularSearches">
              <PopularSearches />
            </Route>
            <Route exact path="/searchVideo">
              <SearchVideo />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App
