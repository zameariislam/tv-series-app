
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'


const App = () => {
 

  const [pageNumber, updatePageNumber] = useState(4);
  const [fetchedData, setFetchedData] = useState([]);
  const [info, setInfo] = useState({});
  
 
  
  
  
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{
    (async function(){
      let data=await fetch(api).then((res)=>res.json())
     
       setFetchedData(data?.results)
       setInfo(data?.info)
       
      
     
      console.log(data.results);
    })()
  },[api])


  return (

    <div className='  m-auto container border '>

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


      
    </div>
   
  
  
   
  );
};

export default App;
