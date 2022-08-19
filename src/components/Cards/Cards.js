import React from 'react';

import './Cards.css'


const Cards = ({fetchedData}) => {

    let display;
    if(fetchedData){
      display=  fetchedData.map((x)=>{
            const{name,image,id,location,status}=x;
            return <div className='col-lg-4 position-relative cards mb-4  '  key={id}>
                <div className=''>
                    <img className='img-fluid' src={image} alt="" />
                    <div className='content'>
                    <div style={{padding:'20px'}} className='fs-4 fw-bold mb-4'>{name}</div>
                    <div>
                        <div className='fs-6'>Last location</div>
                        <div className='fs-5'>{location.name}</div>
                    </div>

                    </div>
                </div>

                {
                    (()=>{
                        if(status==='Alive'){
                         return <div className="badge bg-success position-absolute">{status}</div>
                        }
                        else if(status==='Dead'){
                           return <div className="badge bg-danger position-absolute">{status}</div>
                        }
                        else{
                            return <div className="badge bg-secondary position-absolute">Unknown</div>
                        }

                    })()
                }
               
               
                

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
