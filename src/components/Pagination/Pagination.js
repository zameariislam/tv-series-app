import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber,pageNumber,info}) => {


    
    return (
        <ReactPaginate className='pagination justify-content-center gap-4 my-4' pageCount={info?.pages}
        nextLabel='Next'
        previousLabel='Prev'
        previousClassName='btn btn-primary'
        nextClassName='btn btn-primary'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        onPageChange={(data)=>setPageNumber(data.selected+1)}
        activeClassName='active'
        forcePage={pageNumber===1? 0:pageNumber-1}
        

       
        
        />
        
    );
};

export default Pagination;