import ReactPaginate from 'react-paginate';

const Pagination = ( {pageNumber, setPageNumber, info} ) => {
  
  return (
    <ReactPaginate 
        className= "pagination justify-content-center gap-2 my-4"
        pageCount= {info?.pages}
        previousLabel= "Prev"
        nextLabel= "Next"
        previousClassName= "btn btn-primary"
        nextClassName= "btn btn-primary"
        previousLinkClassName= "text-white text-decoration-none"
        nextLinkClassName= "text-white text-decoration-none"
        pageClassName= "page-item"
        pageLinkClassName= "page-link"
        activeClassName= "active"
        onPageChange= {(data)=>(
            setPageNumber(data.selected +1)
        )}

    />
  )
}

export default Pagination