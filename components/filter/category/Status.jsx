import FilterBtn from "../filterbtn/FilterBtn"

const Status = ( {setStatus,setPageNumber , results} ) => {
  let statusList=[]
  results?.map((result)=>{
    statusList.push(result?.status)
  })
  statusList= [...new Set(statusList)]

  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
        className="accordion-button collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseThree" 
        aria-expanded="false" 
        aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div 
        id="collapseThree" 
        className="accordion-collapse collapse" 
        data-bs-parent="#accordionExample">
      <div 
        className="accordion-body d-flex flex-wrap gap-3">
            { statusList.map((item, index)=>(
                <FilterBtn 
                    key= {index}
                    item={item}
                    index={index}
                    name= "Status"
                    task= {setStatus}
                    setPageNumber= {setPageNumber}
                    />
            )) }
      </div>
    </div>
  </div>
  )
}

export default Status