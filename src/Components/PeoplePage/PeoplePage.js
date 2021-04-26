import React, { Component } from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetails from "../ItemDetails/ItemDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import SwapiServices from "../../services/SwapiServices";
import Row from "../Row/Row";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

export default class PeoplePage extends Component {
  swapi = new SwapiServices();
  state = {
    selectedId: 3,
    hasError: false,
  };
  onPersonSelected = (id) => {
    this.setState({ selectedId: id });
  };
  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapi.getAllPeople}
      >
        {({ name, birthYear, gender }) => `${name} (${gender}, ${birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ItemDetails 
      personId={this.state.selectedId} 
      getData={this.swapi.getPerson}
      getImgUrl={this.swapi.getPersonImage}
       />
    );
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
