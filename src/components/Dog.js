import React from "react";
import { Link } from "react-router-dom";

const Dog = function ({ dog }) {
  
  return (
    <div>
      Собака
      <h1>{dog.id}</h1>
      <p>{dog.name}</p>
      <Link to={`/details/${dog.id}`}>
        <img       
          alt="Loading"
          src={dog.image.url}
          style={{ width: 240 }}
        ></img>
      </Link>
    </div> 
  );
};

export default Dog;
