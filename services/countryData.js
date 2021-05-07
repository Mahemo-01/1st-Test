class Service {
  constructor() {
    this.countryId = 0,
      this.countries = [],
      this.states = [],
      this.data = ""
  }

  getData() {
    const data = {
      paises: [
        { countryId: 1, name: "Mexico" },
        { countryId: 2, name: "Argentina" }],
      phoneTypes: ['uno', 'dos']
    }

    //console.log(data.paises[0].name)
    this.data = data

    return data;
  }

  getCountries() {
    console.log(this.data)
  }
}

const service = new Service();

console.log(service.getData());
console.log(service.data.paises[1].countryId);
