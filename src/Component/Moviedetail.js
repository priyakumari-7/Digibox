import React from 'react'
import jsondata from './MovieDetailUrl.json'
import {useState} from React;
import img from '../imageUrl.json'
function Moviedetail() {
    const [detail,setDetail]=useState('')
    return (
    
        
        <div>
             {jsondata.map((key,val)=>{

             
                onclick={url.imageUrl},MoviedetailUrl)
             )}

             )
        </div>
    )
}

export default Moviedetail
