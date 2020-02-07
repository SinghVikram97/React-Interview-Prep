import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Result from "./Result";
import ThemeContext from "./ThemeContext";
const SearchParams = () => {
  // hooks like useState never go inside if-statements and for-loops
  // Because hooks keep track of state elements by the order they are called in
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [BREEDS, setBREEDS] = useState([]);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  // So everytime they should be called in same order or it messes up things

  async function requestPets() {
    // You can use pet.animals.then((data)=> // do something) instead
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

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
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor="theme">
          Theme
          <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
