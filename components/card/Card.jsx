import Link from "next/link"
import styles from "./Card.module.scss"

const Card = ({results}) => {
  let location= window.location.href

  let display;

  if(results){
    display= results.map((result)=>(
      <div className="col-lg-4 col-md-6 col-12 position-relative" key={result.id}>
        <div className="bg-white shadow rounded mb-4">
          <Link 
          href={`${location}/${result.id}`}
          className="text-decoration-none text-black"
          >
            
        <img src={result.image} alt={result.name} className="img-fluid w-100  img-top rounded-top" />
        <div className=" p-2">
          <div className="fs-4 fw-bold mb-4">{result.name}</div>
          <div className="">
            <div className="fs-5">Last Loation:</div>
            <a href={result.location.url} className="fs-6">{result.location.name || <Skeleton />}</a>
          </div>
        </div>
          
        <div className= {`${styles.badge} badge position-absolute text-bg-${result.status=="Dead"? `danger`: result.status=="Alive"? `success`: `secondary`}`} >{result.status}
        </div>
        </Link>
      </div>
      </div>
    ))
  }else{
    display= "No Characters foud :/"
  }

  return (
    <>
      {display}
    </>
  )
}

export default Card