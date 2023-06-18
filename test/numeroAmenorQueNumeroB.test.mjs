import { numeroAmenorQueNumeroB } from '../src/lib/ordenar.mjs';
import { assert } from 'chai';
import { describe } from 'mocha';

describe("lib/ordenar.mjs - numeroAmenorQueNumeroB", ()=>{

    it('entrega true si a < b', () => {
        assert.equal(numeroAmenorQueNumeroB(3, 5), true)
    })

    it('entrega false si a > b', () => {
        assert.equal(numeroAmenorQueNumeroB(5, 3), false)
    })

    it('entrega false si a === b', () => {
        assert.equal(numeroAmenorQueNumeroB(5, 3), false)
    })
})