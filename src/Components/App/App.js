import { Component } from 'react';
import Header from "../Header/Header.js";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../Details/PersonDetails/PersonDetails";
import './App.css';
export default class App extends Component {
  state = {
    selectedId:5
  }
  onPersonSelected = (id) => {
    setTimeout(() => {
      this.setState({ selectedId: id })  
    },1000)  
  }
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedId} />
          </div>
        </div>
      </div>
    );
  }

}
