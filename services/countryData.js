class Service {
  constructor() {
    this.countryId = 0,
      this.countries = [],
      this.states = [],
      this.data = this.getData()
  }

  getData() {
    const data = {
      paises: [
        { countryId: 1, name: "Mexico" },
        { countryId: 2, name: "Argentina" }],
      phoneTypes: ['Principal', 'Oficina', 'Casa', 'Móvil', 'Otro']
    }

    //console.log(data.paises[0].name)
    this.data = data

    return data;
  }

  getCountries() {
    return this.data.paises.map(country => country.name)
  }

  getPhoneTypes() {
    return this.data.phoneTypes
  }
}

console.clear()
const service = new Service();
const paisesarray = service.getCountries()
const phoneTy = service.getPhoneTypes()
console.log(paisesarray)
console.log(phoneTy)


