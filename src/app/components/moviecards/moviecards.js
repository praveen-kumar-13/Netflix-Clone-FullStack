"use client"
import { useEffect, useState } from "react"
import "./moviecards.css"

import { useNavigate } from "react-router-dom";


const Moviecards=({title})=>{
    const[movies,setMovies]=useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8000/list")
        .then((res)=>res.json())
        .then((data)=>setMovies(data))
        .catch((errmsg)=>{console.log(errmsg)})
    },[])

    const handlechange=()=>{
        navigate("/player");
    }

    return(
    <div className='title-card'>
         <h2>{title?title.name:"Popular movies"}</h2>
        <div onClick={handlechange} className="card-list">
        {
            movies.map((mov)=>(
                <div key={mov.name} className="card">
                <img src={mov.image}></img>
                <p>{mov.name}</p>
                </div>
            ))
        }
        </div>  
   </div>
    )
}
export default Moviecards