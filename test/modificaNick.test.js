
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { modificaNick } from '../src/js/funciones/modifcaNick.js';
should();  // Modifies `Object.prototype`

/*describe contiene la descripcion de lo que vamos a testear y luego también contiene una función arrow donde estan los tests
it contiene una descripción del testing y luego contiene un función arrow donde estan la función de testeo.
assert.equal compara argumentos que pongamos y produce un error si no son iguales.
Por ejemplo, en este caso llamamos a modificaNick y le pasamos un valor para comprobar si funciona
al lado, después de la coma, añadimos lo que esperamos recibir. Pasamos paco pera y espero recibir PACO_PERA
si devuelve lo que hemos puesto saldra un tick sino saldra un error y nos dira que ha devuelto. 
*/

describe("Función modificaNick ...", ()=>{
    it("recibe '   paco pera     ' y devuelve PACO_PERA", ()=>{
        assert.equal(modificaNick('  paco pera  '), 'PACO_PERA')
    })
    it("recibe 'Eduardo Pi' y devuelve EDUARDO_PI", ()=>{
        assert.equal(modificaNick('Eduardo Pi'), 'EDUARDO_PI')
    })
    it("recibe 'Edu Pi pA' y devuelve EDU_PI_PA", ()=>{
        assert.equal(modificaNick('Edu Pi pA'), 'EDU_PI_PA')
    })
})
