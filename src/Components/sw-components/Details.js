import React from "react";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import SwapiServices from "../../services/SwapiServices";

const swapi = new SwapiServices();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapi;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      personId={itemId}
      getData={getPerson}
      getImgUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      personId={itemId}
      getData={getPlanet}
      getImgUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      personId={itemId}
      getData={getStarship}
      getImgUrl={getStarshipImage}
    >
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="costInCredits" label="Cost in credits" />
      <Record field="crew" label="Cost in credits" />
      <Record field="passengers" label="Crew" />
      <Record field="cargoCapacity" label="Cargo Capacity" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
