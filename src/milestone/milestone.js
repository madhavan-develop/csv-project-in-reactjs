import Milestone, { useEffect, useState } from 'react';
import {CSVLink} from 'react-csv';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
export function Assesment()
{
   //add, sub
    const[addit,setAdd]=useState(0)
    function addition()
    {
    {
        setAdd(addit+1)
    }
}
function subtract()
{
{
    setAdd(addit-1)
}
}
//fetch
    const[fetchda,setFetchda]=useState([])
    useEffect(()=>
    {
        fetch("https://fakestoreapi.com/products/")
        .then(result=>result.json())
        .then(data=>setFetchda(data))
    })
    const headers=[
        {label:"Id",key:"id"},
        {label:"PRICE",key:"price"},
        {label:"DESCRIPTION",key:"description"},
        {label:"TITLE",key:"title"},
        {label:"CATEGORY",key:"category"},
        {label:"rating",key:"rating.rate"}
    ]
     return(
       <>
       <div className='container p-5'>
       <div className='d-flex'>
       <h1>PRODUCT DETAILS</h1>
      <CSVLink data={fetchda} headers={headers}><button className="btn btn-primary">Download</button></CSVLink> 
       </div>
       <table cellPadding={"4px"}className="tablemain">
            <tr className='trow'>
                <th>Product Image</th>
                <th>Product Title</th>
                <th>product Description</th>
                <th>product rating</th>
                <th>product category</th>
                <th>product count</th>
                <th>Add Count</th>
                <th>More Info</th>
            </tr>
            {fetchda.map((value,index) => {
                return (
                    <tr>
                        <td><img src={value.image} className='tableimage'/></td>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.rating.rate}
                        <StarRatings
                            rating={value.rating.rate}
                            starRatedColor='orange'
                            NumberOfStars={5}
                            starDimension='17px'
                            /></td>
                        <td>{value.category}</td>
                       <td>{value.rating.count}</td>
                        <td><button onClick={subtract}>-</button>
                        <br></br>{addit}<br></br>
                        <button onClick={addition} >+</button></td>
                        <Link to={`/miles/${value.id}`}><button className='rounded but'>view more</button></Link>
                        <td></td>
                    </tr>
                )
            })}
        </table>
        </div>
       </>
    );
}
