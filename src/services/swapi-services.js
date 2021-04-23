export default class SwapiServices {
  _apiBase = "https://swapi.dev/api";
  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return response.json();
  };
  async getAllPeople() {
    const data = await this.getResource(`/people/`);
    return data.results;
  }
  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }
  async getAllPlanets() {
    const data = await this.getResource(`/planets/`);
    return data.results;
  }
  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }
  async getAllStarships() {
    const data = await this.getResource(`/starships/`);
    return data.results;
  }
  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}
