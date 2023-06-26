import FilterBtn from "../filterbtn/FilterBtn"

const Species = ( {setSpecies, setPageNumber , results} ) => {
  let speciesList=[]
  results?.map((result)=>{
    speciesList.push(result?.species)
  })
  speciesList= [...new Set(speciesList)]

  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
        className="accordion-button collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseTwo" 
        aria-expanded="false" 
        aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div 
        id="collapseTwo" 
        className="accordion-collapse collapse" 
        data-bs-parent="#accordionExample">
      <div 
        className="accordion-body d-flex flex-wrap gap-3">
        { speciesList.map((item, index)=>(
            <FilterBtn 
              key= {index}
              item={item}
              index={index}
              name= "Species"
              task= {setSpecies}
              setPageNumber= {setPageNumber}
              />
            )) }
      </div>
    </div>
  </div>
  )
}

export default Species