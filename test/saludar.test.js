
import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

import { saludar } from "../src/js/funciones/saludar.js";

describe('Funcion saludar..',()=>{
    it('Espero Hola Pepe si le paso Pepe',()=>{
        assert.equal(saludar("Pepe"),"Hola Pepe")
    })
})