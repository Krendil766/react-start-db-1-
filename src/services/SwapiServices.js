export default class SwapiServices {
  _apiBase = "https://swapi.dev/api";
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return response.json();
  };
  getAllPeople = async () => {
    const data = await this.getResource(`/people/`);
    return data.results.map(this._transformPerson);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };
  getAllPlanets = async () => {
    const data = await this.getResource(`/planets/`);
    return data.results.map(this._transformPlanet);
  };
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };
  getAllStarships = async () => {
    const data = await this.getResource(`/starships/`);
    return data.results.map(this._transformStarship);
  };
  getStarship = async (id) => {
    const starship = this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };
  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };
  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };
}


