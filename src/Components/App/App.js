import { Component } from "react";
import Header from "../Header/Header.js";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../Details/PersonDetails/PersonDetails";
import PeoplePage from "../PeoplePage/PeoplePage";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator.js";
import ErrorButton from "../ErrorButton/ErrorButton.js";

import "./App.css";
export default class App extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    console.log("err");
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <ErrorButton />
      </div>
    );
  }
}
