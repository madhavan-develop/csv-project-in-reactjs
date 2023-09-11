import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
export function Mile1()
{
    const[fetchda,setfetchda]=useState([])
    var {id}=useParams()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(result=>result.json())
        .then(data=>setfetchda(data))
    })
    return(
        <>
        <div className='row '>
        
        <div className='col-lg-6'>
            <img src={fetchda.image}className='img-fluid'/>
         </div>
         <div className='col-lg-6'>   
            <h1>{fetchda.title}</h1>
            {/* <p>{fetchda.rating.rate}</p> */}
            <p>{fetchda.category}</p>
            <p>{fetchda.description}</p>
             </div>
        </div>
    </>
    );
}