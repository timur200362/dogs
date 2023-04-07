import axios from "axios";
import Dog from "./Dog";
import React, { useEffect, useState } from "react";

const Dogs = function () {
  const [dogs, setDogs] = useState([]);

  const apiURL = "https://api.thedogapi.com/v1/breeds";

  useEffect(() => {
    axios.get(apiURL).then((r) => setDogs(r.data));
  }, []);
  return (
    <>
      <div>
        {dogs.map((dog, index) => (
              <Dog dog={dog} key={index}/>
        ))}
      </div>
    </>
  );
};

export default Dogs;
