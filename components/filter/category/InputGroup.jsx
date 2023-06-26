import React from "react";

const InputGroup = ( {name, total, setId} ) => {
    const options= [...Array(total).keys()]

    const handleChange=(e)=>{
        setId(e.target.value)
    }

  return (
    <div class="input-group mb-3 ">
  <select 
    onChange={handleChange}
    class="form-select" 
    id={name}>
    <option value= "1" selected>Choose...</option>
    { options.map((option)=>(
        <option 
            key={option +1 }
            value={option +1 }>
                {name} {option + 1}
        </option>
    ))}
  </select>
</div>
  )
};

export default InputGroup;
