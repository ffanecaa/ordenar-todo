import { seguinteElementoAmover } from '../src/lib/ordenar.mjs'
import { describe } from 'mocha'
import { assert } from 'chai'

/** @type {import("../src/lib/ordenar.mjs").comparator<Number>} */
function comparadorDeBroma(a, b){ // Mocked comparator
    return a < b
}

describe("lib/ordenar.mjs - seguinteElementoAmover", ()=>{
    it('Número menor en primera posición', () => {
        assert.equal(seguinteElementoAmover([0,5,5,5], comparadorDeBroma), 0)
    })
    it('Número menor no medio posición', () => {
        assert.equal(seguinteElementoAmover([5,5,0,5], comparadorDeBroma), 2)
    })
    it('Número menor ó final', () => {
        assert.equal(seguinteElementoAmover([5,5,5,0], comparadorDeBroma), 3)
    })
})