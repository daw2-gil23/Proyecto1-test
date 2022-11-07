import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
should();
import { modificaData2 } from "../src/js/funciones/modificaData2.js"

/*
En este caso le pasamos un objeto de tipo data a modificaData2 y esperamos que devuelva la fecha en un formato especifico
*/

describe("Función modificaData2", ()=>{
    it("Recibe un objeto con fecha 2022-10-26 y devuelve: 2022/10/26 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-10-26 00:00:00')), '2022/10/26 00:00:00')
    })
    it("Recibe un objeto con fecha 2022-1-26 y devuelve: 2022/01/26 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-01-26 00:00:00')), '2022/01/26 00:00:00')
    })
    it("Recibe un objeto con fecha 2022-1-6 y devuelve: 2022/01/06 00:00:00", ()=>{
        assert.equal(modificaData2(new Date('2022-01-6 00:00:00')), '2022/01/06 00:00:00')
    })
})
