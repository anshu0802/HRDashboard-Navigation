import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import "./home.scss"
 function Home() 
 {
  return (
    <>
    <div className="home">
     <Sidebar/>
 <div className="homeContainer">
      Home Container
      <Navbar/>
    </div>
    </div>
    </>
  )
}
export default Home;