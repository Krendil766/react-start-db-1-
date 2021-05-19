import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { StarshipDetails } from '../sw-components'

import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    return this.setState({ isLoggedIn: true })
  }
  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path='/' render={() => <h1>Welcome to StartDB</h1>} exact />
                <Route path='/people/:id?' component={PeoplePage} />
                <Route path='/planets/:id?' component={PlanetsPage} />
                <Route path='/starships/' exact component={StarshipsPage} />
                <Route path='/starships/:id'
                  render={({ match }) => {
                    const { id } = match.params
                    return <StarshipDetails itemId={id} />
                  }}
                />
                <Route path='/login'
                  render={({ history }) => <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} history={history} />} />
                <Route path='/secret'
                  render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />} />
                <Route render={()=><h2>Page not found</h2>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
