"use client"
import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "@/components/filter/Filter";
import Card from "@/components/card/Card";
import Pagination from '@/components/pagination/Pagination';
import Search from '@/components/search/Search';

export default function Home() {
  let [pageNumber, setPageNumber]= useState(1);
  let [search, setSearch]= useState("");
  let [gender, setGender]= useState("");
  let [status, setStatus]= useState("");
  let [species, setSpecies]= useState("");
  let [fetchedData, setFetchedData]= useState([])
  let {info, results}= fetchedData
  
  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() =>{
    const apiCall= async ()=>{
      let data= await fetch(api)
        .then(res=> res.json())
        setFetchedData(data)
      }
    apiCall()
  }, [api])
  return (
    <div className='App'>
      <h1 className="text-center mt-4">Characters</h1>
      <Search 
      setSearch= {setSearch}
      setPageNumber= {setPageNumber}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <Filter 
              setGender= {setGender}
              setPageNumber= {setPageNumber}
              setStatus= {setStatus}
              setSpecies= {setSpecies}
              results= {results}
              />
            </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results= {results}/>
              
            </div>
          </div>
        </div>
      </div>

      <Pagination
        pageNumber= {pageNumber} 
        setPageNumber= {setPageNumber}
        info ={info}
        />
    </div>
  )
}
