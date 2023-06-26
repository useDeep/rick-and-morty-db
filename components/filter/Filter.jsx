import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filter = ( {setGender, setPageNumber , setStatus,       setSpecies, results}) => {
  
  const clearFilter= (e)=>{
    setStatus("")
    setGender("")
    setSpecies("")
    e.preventDefault()
  }

  return (
    <div className='mb-4'>
      <div className='text-center fw-bold fs-4 mb-1'>Filter</div>
      <div 
      role='button'
      className="text-primary text-center text-decoration-underline mb-3"
      onClick={clearFilter}
      >Clear Filters</div>

      <div className="accordion" id="accordionExample">
        <Gender 
          setGender= {setGender}
          setPageNumber= {setPageNumber}
          results= {results}
        />
        <Species 
          setSpecies= {setSpecies}
          setPageNumber= {setPageNumber}
          results= {results}
        />
        <Status 
          setStatus= {setStatus}
          setPageNumber= {setPageNumber}
          results= {results}
          />
      </div>
    </div>
  )
}

export default Filter