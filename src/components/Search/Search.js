import React, { useRef } from 'react';
import './Search.css'

const Search = ({setSearch,setPageNumber}) => {
  // const inputRef=useRef('');


    let searchBtn = (e) => {
        e.preventDefault();
        // setSearch(inputRef.current.value)
      };

    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>


<input   onChange={(e)=>{
    setPageNumber(1);
    setSearch(e.target.value);

}
  }  placeholder='Search for character' type="text" className='input' name="" id="" />
<button onClick={searchBtn} className='btn btn-primary fs-5'>Search</button>
           
        </form>
    );
};

export default Search;