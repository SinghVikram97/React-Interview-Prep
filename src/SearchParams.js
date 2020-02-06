import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
const SearchParams = () => {
  // hooks like useState never go inside if-statements and for-loops
  // Because hooks keep track of state elements by the order they are called in
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [BREEDS, setBREEDS] = useState([]);

  // So everytime they should be called in same order or it messes up things

  // Use effect replaces lifecycle hooks like componentDidMount(), componentWillUnmount()
  useEffect(() => {
    setBREEDS([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBREEDS(breedStrings);
    });
  }, [animal]);

  // Declaring dependencies for useEffect so it runs only when animal changes
  // Otherwise it would run on every re render which would also happen on change of location
  // If you want to run only once when it renders 1st time pass empty array []
  // If you want to run everytime something updates don't pass anything

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal, index) => {
              return <option key={index}>{animal}</option>;
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            disabled={!BREEDS.length}
          >
            <option>All</option>
            {BREEDS.map((breed, index) => {
              return <option key={index}>{breed}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
