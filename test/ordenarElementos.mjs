import { describe } from 'mocha'
import { assert } from 'chai'
import { ordenarElementos } from '../src/lib/ordenar.mjs'

/** @type {import("../src/lib/ordenar.mjs").comparator<Number>} */
function comparadorDeBroma(a, b){ // Mocked comparator
    return a < b
}

/** @type {import("../src/lib/ordenar.mjs").buscadorDeElementoAMover<Number>} */
function buscadorDeBroma(lista, comparador) {
    let indice = 1
    let posicioDoMenor = 0
    while ( indice < lista.length ) {
        if ( ! comparador(lista[posicioDoMenor], lista[indice])) {
            posicioDoMenor = indice
        }
        indice++
    }
    return posicioDoMenor
}

describe("lib/ordenar.mjs - ordenarElementos", ()=>{
    it('Desordenado', () => {
        assert.deepEqual(ordenarElementos([0,2,1,3], buscadorDeBroma, comparadorDeBroma), [0,1,2,3])
    })
    it('Ordeado', () => {
        assert.deepEqual(ordenarElementos([0,1,2,3], buscadorDeBroma, comparadorDeBroma), [0,1,2,3])
    })
    it('Inverso', () => {
        assert.deepEqual(ordenarElementos([3,2,1,0], buscadorDeBroma, comparadorDeBroma), [0,1,2,3])
    })
    it('Repetidos', () => {
        assert.deepEqual(ordenarElementos([2,3,2,0,1,0], buscadorDeBroma, comparadorDeBroma), [0,0,1,2,2,3])
    })
})