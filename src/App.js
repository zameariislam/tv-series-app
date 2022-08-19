
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';


const App = () => {
 

  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber)
  const [fetchedData, setFetchedData] = useState([]);
  const [info, setInfo] = useState({});
  const[search,setSearch]=useState('')
  
 
  
  
  
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{
    (async function(){
      let data=await fetch(api).then((res)=>res.json())
     
       setFetchedData(data?.results)
       setInfo(data?.info)
       
      
     
      console.log(data.results);
    })()
  },[api])
  console.log(search)


  return (

    <div className='mx-auto container border '>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>


      <div  className='row' >
        <div className='col-3'>
        <Filters/>
        {fetchedData.length}

        </div>
        <div className='col-8'>
          <div className="row">
            <Cards fetchedData={fetchedData}/>
            
         
          </div>
       
        </div>

      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} >

      </Pagination>


      
    </div>
   
  
  
   
  );
};

export default App;
