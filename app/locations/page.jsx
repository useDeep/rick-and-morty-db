"use client"
import Card from "@/components/card/Card";
import InputGroup from "@/components/filter/category/InputGroup";
import { useState, useEffect } from "react";

const page = () => {
  const [fetchedData, setFetchedData]= useState([])
  const [results, setResults]= useState([])
  const [id, setId]= useState(1)
  const {type, dimension, name}= fetchedData
  const api= `https://rickandmortyapi.com/api/location/${id}`

  useEffect(()=>{
    const apiCall= async() =>{
      let data= await fetch(api)
      .then(res => res.json())
      setFetchedData(data)

    let resInfo= await Promise.all(
      data.residents.map((resident)=>{
        return fetch(resident)
          .then(res=> res.json())
      })
    )
    setResults(resInfo)
    }
    apiCall()

  }, [api])
  

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-3">
          Location : <span className="text-primary">{name=== ""? "Unknown": name}</span></h1>
          <h5 className="text-center ">
        Dimension  : <span className="text-primary">{dimension===""? "Unknown": dimension}</span></h5>
        <h6 className="text-center mb-3">
        Type  : <span className="text-primary">{type===""? "Unknown": type}</span></h6>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <h4 className="text-center mb-3">Pick Location</h4>
        <InputGroup 
          name= "Location"
          total= {126}
          setId= {setId}
        />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
          <Card
            results= {results}
          />
          </div>
        </div>
      </div>
    </div>
  )
};

export default page;
