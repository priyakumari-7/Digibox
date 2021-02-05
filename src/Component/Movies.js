import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { Formik } from 'formik'
import React, { Component } from 'react'
import img from '../imageUrl.json';
import {Field, ErrorMessage} from Formik
class Movies extends Component {
    
    render() {
        return (
            <div className="form-control">
               {({img}) =>{
                   return options.map(option=>{
                       return(
                           <React.Fragment key={option.key}>
                               <input 
                               type="checkbox"
                               id={option.value}
                               {...field}
                               value={option.value}
                               checked={img.value===option.value}
                               />
                           </React.Fragment>
                       )
                   })
               }}
            </div>
        )
    }
}

export default Movies
