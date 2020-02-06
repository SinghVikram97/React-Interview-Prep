import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
const SearchParams = () => {
  // hooks like useState never go inside if-statements and for-loops
  // Because hooks keep track of state elements by the order they are called in
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [BREEDS, setBREEDS] = useState([]);

  // So everytime they should be called in same order or it messes up things

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
