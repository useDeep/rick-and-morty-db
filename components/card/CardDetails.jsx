"use client"
import { useState, useEffect } from "react";
import Image from 'next/image'

const CardDetails = ( {id} ) => {
  const [fetchedData, setFetchedData]= useState([])
  let {name, image, location, origin, gender, species, status, type}= fetchedData

  let api= `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() =>{
    const apiCall= async ()=>{
      let data= await fetch(api)
        .then(res=> res.json())
        setFetchedData(data)
      }
    apiCall()
  }, [api])
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-m bg-white shadow mt-4 rounded p-2 flex-shrink">
      <h1 className="text-center">{name}</h1>
    <img src={image} className="img-fluid"/>
    <div className= {`my-2 text-center fs-5 rounded text-bg-${status=="Dead"? `danger`: status=="Alive"? `success`: `secondary`}`} >{status}</div>
      <div className="content">
        <div>
          <span className="fw-bold">Gender:</span>
          {gender}
        </div>
        <div>
          <span className="fw-bold">Species:</span>
          {species}
        </div>
        <div>
          <span className="fw-bold">Type:</span>
          {type === "" ? "Unknown" : type}
        </div>
        <div>
          <span className="fw-bold">Origin:</span>
          {origin?.name}
        </div>
        <div>
          <span className="fw-bold">Location:</span>
          {location?.name}
        </div>
      </div>
    </div>
    </div>
  )
};

export default CardDetails;
