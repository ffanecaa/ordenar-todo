/**
 * @template T
 * @callback comparator
 * @param {T} a
 * @param {T} b
 * @returns {Boolean}
 */

/**
 * Compara dous numeros
 * @type {comparator<Number>}
 */
function numeroAmenorQueNumeroB(a,b){
    //TODO
}

/**
 * Buscar seguinte elemento a mover
 * @template T
 * @callback buscadorDeElementoAMover
 * @param {T[]} lista - Lista de elementos a ordear
 * @param {comparator<T>} comparador - Funcion comparadora de elementos
 * @returns {Number} - Indice do elemento a mover
 */
function seguinteElementoAmover(lista, comparador) {
    //TODO
}

/**
 * Move ordenadamente os elementos a un novo array
 * @template T
 * @callback ordenarTodo
 * @param {T[]} lista - Lista de elementos a ordear
 * @param {buscadorDeElementoAMover<T>} selectorElementoAmover - Funcion buscar elemento a mover
 * @param {comparator<T>} comparador - Funcion comparadora de elementos
 * @returns {T[]} - Array con elementos ordenados
 */
function ordenarElementos(lista, selectorElementoAmover, comparador){
    //TODO
}

export {
    numeroAmenorQueNumeroB,
    seguinteElementoAmover,
    ordenarElementos
}