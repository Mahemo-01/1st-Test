
let telefonos = document.querySelector('#telefonos')
let paises = document.getElementById('paises')
let estados = document.querySelector('#estados')

console.log(paises)

let phones = ["Celular", "Particular", "Laboral", "Principal"]
let countries = [
  { name: "🇲🇽 México", estado: ["Edo de Méx", "Veracruz"] },
  { name: "Argentina", estado: ["Cordoba"] },
  { name: "Ecuador", estado: ["Quito"] },
  { name: "Colombia", estado: ["Medellin"] }
]

phones.forEach(e => {
  telefonos.innerHTML += `<option value ="${e}">${e}</option>`
});

countries.forEach(e => {
  paises.innerHTML += `<option value ="${e.name}">${e.name}</option>`
});

function getOption() {
  estados.innerHTML = ``
  const id = paises.selectedIndex

  countries[id].estado.forEach(e => {
    estados.innerHTML += `<option value ="${e}">${e}</option>`
  });
}
getOption()
paises.onchange = getOption


