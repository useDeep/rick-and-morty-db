import React from 'react'

const Search = ({ setSearch, setPageNumber }) => {
    const handleChange = (e)=>{
        setSearch(e.target.value)
        setPageNumber(1)
    }

  return (
    <form className='d-flex justify-content-center gap-2 my-4 mb-5' onSubmit={(e)=> e.preventDefault()}>
        <input 
        onChange={handleChange}
        type="text" 
        className='form-control w-50 ps-4 shadow-sm bg-body ' 
        placeholder='Search Charaters' 
        />
        <button 
        className="btn btn-primary fs-5 px-4 shadow-sm">
            Search
        </button>
    </form>
  )
}

export default Search