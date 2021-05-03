import React from "react";
import { WithData } from "../hoc-helpers/WithData";
import { WithSwapiService } from "../hoc-helpers/WithSwapiService";
import ItemList from "../ItemList/ItemList";

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const ListWithChildrenPerson = withChildFunction(
  ItemList,
  ({ name, birthYear, gender }) => `${name} (${gender}, ${birthYear})`
);
const ListWithChildrenPlanet = withChildFunction(
  ItemList,
  ({ name, population, diameter }) => `${name} (${population}, ${diameter})`
);
const ListWithChildrenStarShip = withChildFunction(
  ItemList,
  ({ name, model, costInCredits }) => `${name} (${model}, ${costInCredits})`
);
const mapPersonMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople,
  };
};
const mapPlanetMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPlanets,
  };
};
const mapStarshipMethodsToProps = (swapi) => {
  return {
    getData: swapi.getAllStarships,
  };
};
const PersonList = WithSwapiService(
  WithData(ListWithChildrenPerson),
  mapPersonMethodsToProps
);
const PlanetList = WithSwapiService(
  WithData(ListWithChildrenPlanet),
  mapPlanetMethodsToProps
);
const StarshipList = WithSwapiService(
  WithData(ListWithChildrenStarShip),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
