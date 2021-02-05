import { React,Component } from 'react';
import './App.css';
import Digiboxnav from './Component/DigiboxNav'
import Movielist from './Component/Movielist';
import Footer from './Component/Footer';
import Bodyheader from './Component/Bodyheader';
function App() {
  return (
    <div className="App">
     
       <Digiboxnav/>
       <Bodyheader/><br/>
       <Movielist/>
       <Footer/>
     
    </div>
  );
}

export default App;
