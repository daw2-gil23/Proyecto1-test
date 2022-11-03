
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { edat } from '../src/js/funciones/edad.js';
should();  // Modifies `Object.prototype`


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

