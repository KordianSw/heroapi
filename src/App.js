import React from 'react';
import { getBasicHeroInfoById } from './requests';
import './App.css';
import Nav from './Components/Nav/Nav';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';



function App() {
  

  return (
    <>
    <Nav></Nav>
    <main>
      <div className="container">
      <HeroesFeatured />
      </div>
    </main>
    <footer></footer>
    </>
  );
}
export default App;
