import React, { useEffect, useState } from 'react';
import './CardComponent.css';
import {Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = () => {

  const [getData, setData] = useState();
  const [showCard, getShowCard] = useState(false);
  const [showElement, getElement] = useState();

  const getItem = () => {fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(response => setData(response))}

  useEffect(() => {
    getItem();
  },[]);


  const openMe = (element) => {
    
    if(showCard){
      getShowCard(false);
      getElement(null);
      return (document.body.style.overflowY = 'scroll');
       
    };
    getShowCard(true);
    getElement(element);
    document.body.style.overflowY = 'hidden';
  } 



  return (
    <div className='container card-conatiner'>
      <div className='row'>
        {(getData || []).map((element, index) => {
          return (
          <div className='col-md-3' key={index}>
            <Card>
            <Card.Title>{element.title}</Card.Title>
            <Button onClick={() => openMe(element.body)} variant="primary">View Card</Button>
            </Card>
          </div>
          )
          })
        } 
      </div>
        {showCard && (<div className="modal-conatiner ">
          <div className="modal-custom">
            <p id='close-button' onClick={() => openMe()}>X</p> 
            <p>{showElement}</p>
          </div>
          </div>
          )}
    </div>
  );
};
        
  
    

  
export default CardComponent ;

  
    


  
  
  




