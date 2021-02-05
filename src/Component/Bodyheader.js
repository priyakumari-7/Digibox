import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faSearch} from '@fortawesome/free-solid-svg-icons';
import './Bodyheader.css';

<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/> 
class Bodyheader extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            allChecked : true
        }
    }   
    render(){
        return (
            <div className="card">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="card-body row no-gytters">
                            <nav label="breadcrumb mr-auto">
                                <ol className="breadcrumb bg-white">
                                <li className="breadcrumb-item"><a href="#">Media</a></li>
                                <li className="breadcrumb-item"><a href="#">Movies</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Disney</li>
                                </ol>
                            </nav>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                               <div className="card-body row no-gytters align-items-center">
                                    <div className="col">
                                         <div className="input">
                                             <form>
                                             <input type="search" placeholder="Search..." className="searchbar"/>
                                             </form>
                                              </div>                                 
                                          <div className="searchicon" href="#"><FontAwesomeIcon icon={faSearch}/></div>
                                    </div>
                                </div>
                            </div>                       
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-body row no-gytters">
                                        <div className="navbar-nav ml-auto">
                                            <form>
                                            <label className="checkbox" href="#"><input type="checkbox" value="checkAll" checked={this.state.allChecked} 
                onChange={this.handleChange} /> Select All</label>
                                           <label href="#" className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</label>
                                           </form>
                                        </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
    
}

export default Bodyheader
