import React, { Component } from "react";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../Details/PersonDetails/PersonDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class PeoplePage extends Component {
  state = {
    selectedId: 3,
    hasError: false,
  };
  componentDidCatch() {
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
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedId} />
        </div>
      </div>
    );
  }
}
