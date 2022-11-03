
import { saludar } from "./src/js/funciones/saludar.js"
import { dades } from "./src/js/funciones/dades.js"

document.querySelector('#app').innerHTML = `
  <div>
      <h1>${saludar("Maria")}</h1>
  </div>
`
mostraTaula(dades)


