import React from 'react';

const Pagination = ({setPageNumber,pageNumber}) => {


    let next=()=>{
        setPageNumber((x)=>x+1)

    }
    let prev=()=>{
        if(pageNumber>1){
            setPageNumber((x)=>x-1)
        }
    

    }
    return (
        <div className='d-flex justify-content-center gap-3 my-5 '>
            <button onClick={prev} className='btn btn-primary'>prev</button>
            <button onClick={next} className='btn btn-primary'>next</button>
            
        </div>
    );
};

export default Pagination;