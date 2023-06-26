
const FilterBtn = ( {item, index, name, task, setPageNumber} ) => {
    const handleClick= (e)=>{
        setPageNumber("1")
        task(e.target.value)
    }
  return (
    <div className="form-check">
        <input 
            type="radio" 
            onClick={handleClick}
            className="btn-check" 
            name={name} 
            id={`${name}-${index}`} 
            value={item}
            />
        <label 
            className="btn btn-outline-primary" 
            htmlFor={`${name}-${index}`}>
                {item}
        </label>
    </div>
  )
}

export default FilterBtn