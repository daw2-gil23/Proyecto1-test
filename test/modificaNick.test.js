
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import { modificaNick } from '../src/js/funciones/modifcaNick.js';
should();  // Modifies `Object.prototype`

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
