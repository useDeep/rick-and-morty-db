"use client"
import Card from "@/components/card/Card";
import InputGroup from "@/components/filter/category/InputGroup";
import { useState, useEffect } from "react";

const page = () => {
  const [fetchedData, setFetchedData]= useState([])
  const [results, setResults]= useState([])
  const [id, setId]= useState(1)
  const {air_date, name}= fetchedData
  const api= `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(()=>{
    const apiCall= async() =>{
      let data= await fetch(api)
      .then(res => res.json())
      setFetchedData(data)

    let charInfo= await Promise.all(
      data.characters.map((character)=>{
        return fetch(character)
          .then(res=> res.json())
      })
    )
    setResults(charInfo)
    }
    apiCall()

  }, [api])
  

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-3">
          Episode : <span className="text-primary">{name=== ""? "Unknown": name}</span></h1>
        <h5 className="text-center mb-3">
        Air Date : <span className="text-primary">{air_date===""? "Unknown": air_date}</span></h5>
      </div>
      <div className="row">
        <div className="col-lg-3" >
          <h4 className="text-center mb-3">Pick Episode</h4>
        <InputGroup 
          name= "Episode"
          total= {51}
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