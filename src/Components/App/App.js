import { Component } from "react";
import Header from "../Header/Header.js";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PeoplePage from "../PeoplePage/PeoplePage";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator.js";
import SwapiServices from "../../services/SwapiServices";

import "./App.css";
import {
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/ItemList.js";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components/Details";

export default class App extends Component {
  swapi = new SwapiServices();
  state = {
    hasError: false,
    selectedId: 5,
  };
  componentDidCatch() {
    console.log("err");
    this.setState({ hasError: true });
  }
  onPersonSelected = (id) => {
    this.setState({ selectedId: id });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PersonList />
        <PlanetList />
        <StarshipList />
        <PersonDetails itemId={this.state.selectedId} />
        <PlanetDetails itemId={this.state.selectedId} />
        <StarshipDetails itemId={12} />
      </div>
    );
  }
}
