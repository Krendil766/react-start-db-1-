import React from "react";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import { WithSwapiService } from "../hoc-helpers/WithSwapiService";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="costInCredits" label="Cost in credits" />
      <Record field="crew" label="Cost in credits" />
      <Record field="passengers" label="Crew" />
      <Record field="cargoCapacity" label="Cargo Capacity" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship,
    getImgUrl: swapi.getStarshipImage,
  };
};
export default WithSwapiService(StarshipDetails, mapMethodsToProps);
