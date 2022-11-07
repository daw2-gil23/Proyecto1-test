
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { edat } from '../src/js/funciones/edad.js';
should();  // Modifies `Object.prototype`

/*describe contiene la descripcion de lo que vamos a testear y luego también contiene una función arrow donde estan los tests
it contiene una descripción del testing y luego contiene un función arrow donde estan la función de testeo.
assert.equal compara argumentos que pongamos y produce un error si no son iguales.
Por ejemplo, en este caso llamamos a edat y le pasamos una fecha para comprobar si funciona
al lado, después de la coma, añadimos lo que esperamos recibir. Pasamos 1973/04/13 00:00:00 y espero recibir 49
si devuelve lo que hemos puesto saldra un tick sino saldra un error y nos dira que ha devuelto. 
*/

describe("Función edat", ()=>{
    it("Recibe la fecha de nacimiento en formato texto (2022/10/26 00:00:00) y devuelve la edad de la persona (49)", ()=>{
        assert.equal(edat('1973/04/13 00:00:00'),49)
    })
    it("Recibe la fecha de nacimiento en formato texto (2022/10/26 00:00:00) y devuelve la edad de la persona (22)", ()=>{
        assert.equal(edat('2000/04/13 00:00:00'),22)
    })
    it("Recibe la fecha de nacimiento en formato texto no aceptable para un date y devuelve error", ()=>{
        expect(edat('13/04/2000'))
        .to.deep.equal(
            {
                error: true,
                missatge: "El format no és correcte"
            }
        )
    })
})

