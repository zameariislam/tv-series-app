import React from 'react';

const Cards = ({fetchedData}) => {

    let display;
    if(fetchedData){
      display=  fetchedData.map((x)=>{
            const{name,image,id}=x;
            return <div className='col-4'  key={id}>
                <h1>{name}</h1>

            </div>
        })

    }
    else{
        display=<h1>Not Found</h1>

    }
   
    
    return (
        <>
{display}
            
        </>
    );
};

export default Cards;
