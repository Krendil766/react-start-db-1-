import React, { Component } from "react";
import SwapiServices from "../../services/SwapiServices";
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  interval;
  componentDidMount() {
    this.interval = setInterval(this.updatePlanet,3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  swapi = new SwapiServices();
  state = {
    planet: {},
    loading: true,
    error:false,
  };
  onLoadedPlanet = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }
  onError = (e) => {
    this.setState({
      error: true,
      loading:false,
    })
  }
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapi.getPlanet(id)
      .then(this.onLoadedPlanet)
      .catch(this.onError);
  };
  render() {
    const { planet, loading,error } = this.state;
    const load = loading ? <Spinner />:null;
    const content = !loading?<PlanetView planet={planet} />:null;
    const err = error && <ErrorIndicator/> 


    return (
      <div className="random-planet jumbotron rounded">
        {load}
        {content}
        {err}
      </div>
    )

  }
};

const PlanetView = ({planet:{id, name, population, rotationPeriod, diameter} }) => {
  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
