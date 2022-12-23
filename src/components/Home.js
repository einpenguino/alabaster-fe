import './Home.css'
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Authenticate } from './authTest';


function Home() {

  return (
    <div className="Home">
      <header className="Home-header">     
       <NavBar/>
       <Authenticate/>
      </header>
      <h1 id='home-page-title'>
        alabaster
      </h1>
    </div>
  );
}

export default Home;
