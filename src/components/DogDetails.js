import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DogDetails = function () {

  const params = useParams();
  const [dog, setDog] = useState(undefined);

  useEffect(() => {
    // TODO: получить информацию при помощи axios для собаки по её id
    setDog({
       "id": params.id, 
       "name": "name", 
       "life_span": "life_span", 
       "image": { "url" : "some-url"}, 
       "weight": { "metric" : "1"}, 
       "height": { "metric" : "2"} });    
  }, [])

  return (
    dog ?
    <div>
      <h1>{dog.id}</h1>
      <span>Продолжительность жизни: {dog.life_span}</span>
      <p>Вес: {dog.weight.metric} кг</p>
      <p>Рост: {dog.height.metric} м</p>
      <img src={dog.image.url}></img>
    </div> 
    : 
    <div>
      Подгружаю информацию о собаке...
    </div>
  );
};

export default DogDetails;
