import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <HeroesFeatured />
            </Route>
            <Route exact path="/search">
            </Route>
            <Route path="/hero/:id">
            </Route>
          </Switch>
        </div>
      </main>
    <footer></footer>

    </Router>
    
    </>
  );
}
export default App;
