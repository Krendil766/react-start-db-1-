import React from "react";
import SwapiServices from "../../services/SwapiServices";
import { WithData } from "../hoc-helpers/WithData";
import ItemList from "../ItemList/ItemList";

const swapi = new SwapiServices();
const { getAllPeople, getAllPlanets, getAllStarships } = swapi;

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

const PersonList = WithData(ListWithChildrenPerson, getAllPeople);
const PlanetList = WithData(ListWithChildrenPlanet, getAllPlanets);
const StarshipList = WithData(ListWithChildrenStarShip, getAllStarships);

export { PersonList, PlanetList, StarshipList };
