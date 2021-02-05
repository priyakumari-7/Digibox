import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faCommentAlt,faUser} from '@fortawesome/free-solid-svg-icons';
import './DigiboxNav.css';
import logo from '../logo.png'
function Digiboxnav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
        <img src={logo} width="200" alt="logo"/>
        <li className="nav-item">
            <a className="nav-link" href="home">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="media">Media</a>
        </li>
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item1">
            <div className="nav-link1" href="#"><FontAwesomeIcon icon={faShoppingCart}/>&nbsp; 
            <FontAwesomeIcon icon={faCommentAlt}/></div>       
        </li>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item2 dropdown">
        <div className="nav-link1 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <FontAwesomeIcon icon={faUser} />&nbsp; User
          </div>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">My Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
        </ul>
              
    </nav>  
      
 )
}
export default Digiboxnav