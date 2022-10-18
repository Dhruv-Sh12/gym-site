import React from "react";
import './intro.css';
const Cards = ({ item}) => {
  const { review} = item;
  return (
    <div className="cards">
     
        <h2>"{review.slice(0,150)}..."</h2>
       
        
        
      </div>
   
  );
};

export default Cards;