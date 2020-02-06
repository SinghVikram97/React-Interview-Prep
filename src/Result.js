import React from "react";
import Pet from "./Pet";

const Result = props => {
  const { pets } = props;
  if (pets.length === 0) {
    return (
      <div className="search">
        <h1>No pets found</h1>
      </div>
    );
  } else {
    return (
      <div className="search">
        {pets.map(pet => {
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
};

export default Result;
