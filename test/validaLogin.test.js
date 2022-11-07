import { validaLogin } from "../src/js/funciones/validaLogin.js";
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

/*describe contiene la descripcion de lo que vamos a testear y luego también contiene una función arrow donde estan los tests
it contiene una descripción del testing y luego contiene un función arrow donde estan la función de testeo.
Expect sirve para llamar la función y pasarle datos para testear la función 
.to.depp.equal es igual a assert.equal la diferencia es que descenderá en la jerarquía de objetos y comparará cada valor de cada propiedad.
Por ejemplo, en este caso con expect llamamos a validaLogin y le pasamos unos valores para comprobar si funciona
y con .to.deep.equal añadimos los valores que esperamos recibir. Pasamos nick:"" y pass:"" y espero recibir error: true, missatge: "Aquest usuari no existeix"
si devuelve lo que hemos puesto saldra un tick sino saldra un error y nos dira que ha devuelto. 
*/

describe("Función validaLogin() ...", ()=>{
    it("si no introduce datos en formulario", ()=>{
        expect(validaLogin({nick:"",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari no existeix"
            }
        )
    })
    it("si el usuario no existe", ()=>{
        expect(validaLogin({nick:"ab",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari no existeix"
            }
        )
    })
    it("si el usuario existe y la contraseña no coincide", ()=>{
        expect(validaLogin({nick:"carlos",pass:"1"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Contrasenya incorrecta"
            }
        )
    })
    it("Logeado con exito", ()=>{
        expect(validaLogin({nick:"carlos",pass:"1234"}))
        .to.deep.equal(
            {
                error: false,
                missatge: "Hola carlos"
            }
        )
    })
})
