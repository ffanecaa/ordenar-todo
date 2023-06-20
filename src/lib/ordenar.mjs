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
return a<b
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
  let index = 0
  for (let i = 1; i< lista.length; i++){
    if(comparador(lista[i],lista[index]))
    index = i
  } return index
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
    let ordenar = []
while ( lista.length>0){

   
    selectorElementoAmover  = seguinteElementoAmover(lista,comparador)
     ordenar.push(lista[selectorElementoAmover])
     lista.splice(selectorElementoAmover,1)

} 
 return ordenar
}

export {
    numeroAmenorQueNumeroB,
    seguinteElementoAmover,
    ordenarElementos
}