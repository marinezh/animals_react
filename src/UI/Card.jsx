import React from "react";
import myStyle from "./Card.css";

const Card = (props) => {
  console.log(props.name);
  return (
    <div className="Card">
      <img
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt={props.name}
      />
      <button>remove</button>
      <h2>{props.name}</h2>
      <div className="AddLike">
        
              <p>💚 {props.likes}</p> 
              <button>Add like</button>
       
      </div>
    </div>
  );
};

export default Card;
