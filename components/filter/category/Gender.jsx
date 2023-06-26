"use client"
import FilterBtn from "../filterbtn/FilterBtn"

const Gender = ( {setGender, setPageNumber, results } ) => {

    let genderList= []
    results?.map((result)=>{
      genderList.push(result?.gender)
    })
    genderList= [...new Set(genderList)]

  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
        className="accordion-button" 
        type="button" 
        data-bs-toggle="collapse" data-bs-target="#collapseOne" 
        aria-expanded="true" 
        aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div 
        id="collapseOne" 
        className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div 
        className="accordion-body d-flex flex-wrap gap-3">
            {genderList.map((item, index)=>(
                <FilterBtn 
                    key={index}
                    item={item}
                    index={index}
                    task= {setGender}
                    setPageNumber= {setPageNumber}
                    name= "gender"
                />

            ))}

      </div>
    </div>
  </div>
  )
}

export default Gender