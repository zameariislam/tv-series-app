import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'


import React from 'react';
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'

const App = () => {
  return (

    <div className='container border  '>

      <div  class='row' >
        <div class='col-3'>
        <Filters/>

        </div>
        <div className='col-8'>
        <Cards/>
        </div>

      </div>


      
    </div>
   
  
  
   
  );
};

export default App;
