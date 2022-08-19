import React from 'react';
import './Search.css'

const Search = ({setSearch,setPageNumber}) => {
    let searchBtn = (e) => {
        e.preventDefault();
      };

    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>

<input onChange={(e)=>{
    setPageNumber(1);
    setSearch(e.target.value);

}
  }  placeholder='Search for character' type="text" className='input' name="" id="" />
<button onClick={searchBtn} className='btn btn-primary fs-5'>Search</button>
           
        </form>
    );
};

export default Search;