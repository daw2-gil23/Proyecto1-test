import { validaNouUsuari } from "../src/js/funciones/validaNouUsuari.js";
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

/*describe contiene la descripcion de lo que vamos a testear y luego también contiene una función arrow donde estan los tests
it contiene una descripción del testing y luego contiene un función arrow donde estan la función de testeo.
Expect sirve para llamar la función y pasarle datos para testear la función 
.to.depp.equal es igual a assert.equal la diferencia es que descenderá en la jerarquía de objetos y comparará cada valor de cada propiedad.
Por ejemplo, en este caso con expect llamamos a validaNouUsuari y le pasamos unos valores para comprobar si funciona
y con .to.deep.equal añadimos los valores que esperamos recibir. Pasamos nick:"ab" y pass:"" y espero recibir error: true, missatge: "el nick no és correcte"
si devuelve lo que hemos puesto saldra un tick sino saldra un error y nos dira que ha devuelto. 
*/

describe("Función validaNousuari ...", ()=>{
   
    it("si el usuario tiene menos de 3 letras o más de 10", ()=>{
        expect(validaNouUsuari({nick:"ab",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "El nick no és correcte"
            }
        )
    })
    it("si el usuario tiene mas de 10 letras", ()=>{
        expect(validaNouUsuari({nick:"12345678912", pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "El nick no és correcte"
            }
        )
    })
   
    it("si usuario es correcto pero no escribe la contraseña", ()=>{
        expect(validaNouUsuari({nick:"1234",pass:""}))
        .to.deep.equal(
            {
                error: true,
                missatge: "La contrasenya no és correcte"
            }
        )
    })
 
    it("si usuario es correcto pero pass es menor que 3", ()=>{
        expect(validaNouUsuari({nick:"1234",pass:"1"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "La contrasenya no és correcte"
            }
        )
    })
 
    it("si usuario es correcto pero pass es mayor que 10", ()=>{
        expect(validaNouUsuari({nick:"1234",pass:"12345678912"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "La contrasenya no és correcte"
            }
        )
    })
 
    it("si usuario y contraseña son correctos pero está en la base de datos", ()=>{
        expect(validaNouUsuari({nick:"carlos",pass:"1234"}))
        .to.deep.equal(
            {
                error: true,
                missatge: "Aquest usuari ja existeix"
            }
        )
    })
   
    it("si usuario y contraseña son correctos y no está en la base de datos", ()=>{
        expect(validaNouUsuari({nick:"manolo",pass:"1234"}))
        .to.deep.equal(
            {
                error: false,
                missatge: `L’usuari amb nick: manolo s’ha creat correctament`
            }
        )
    })
})
