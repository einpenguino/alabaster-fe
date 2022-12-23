import './Home.css'
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';


export default function Dashboard() {

  return (
    <div className="Dashboard">
      <header className="Home-header">     
       <NavBar/>
      </header>
      {/* <h1 id='title-dashboard'>
        Hi This is the Dashboard
      </h1> */}
      <h1>Dashboard</h1>
    </div>
  );
}

// export default Home;
