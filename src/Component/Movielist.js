import React, { Component } from 'react';
import img from '../imageUrl.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
import './Movielist.css';
class Movielist extends Component {
  handleChange = e =>{
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      if (itemName === "checkAll") {
        console.log("checking for check all")
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allChecked = list.every(item => item.isChecked);
      }
      return { list, allChecked };
    });

  } 
    render() {
      // const myStyle = {

      // }
        // const images = [];
        //   for (let i = 0; i <img.length; i++) {
        //     // let imgDiv = `<div><input type='checkbox' style={myStyle}/></div>`
        //     images.push(<img src={img[i]} width='400px' height='600px' alt={'logo'}  style={{padding:'15px'}}/>);
            // <input type='checkbox'/>
            //  console.log("img=>",img[i]);
            //  document.getElementsByTagName("input") ;
          
            //    if (img[i].checked) {
            //         var isChecked = images[i].checked;
            //         console.log("isChecked=>",isChecked)
                    
                   
          // }
          
          //  }
        
        return (
          <div className="img-holder">
            <div className="filter">
               <button className="btn btn-lg btn-primary col-xs-12"><FontAwesomeIcon icon={faFilter}/></button>  
               <li className="navbar-nav ml-auto text-align-inline">
                 <form>
                 <li className="input">Sort By:   
                &nbsp;<a className=" btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                List Order</a>
               <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Popularity</a></li>
                  <li><a class="dropdown-item" href="#">Alphabetical</a></li>
                  <li><a class="dropdown-item" href="#">Rating</a></li>
                  <li><a class="dropdown-item" href="#">Release Date</a></li>
                  <li><a class="dropdown-item" href="#">Runtime</a></li>
                  <li><a class="dropdown-item" href="#">Date Added</a></li>
               </ul>
               </li>
                 </form>
               </li>

               </div>
            
              <div class="row">
            {img.map(url=>(   
                <div class="card col-3" style={{width:"100px", cursor:"pointer"}} onClick={()=>{
                  console.log("clicked on image",url.imageUrl)
                }} >
                <img class="card" src={url.imageUrl} alt="card"/>
                
                <div class="card-body">
                  <input class="card-link" type="checkbox" name={url.mveName}  onChange={this.handleChange} />
                  <a href="#" class="card-link">{url.mveName}</a>
                </div>
              </div>
              
            ))};
            
             </div>
            </div>
        )
    }
}

export default Movielist
