/**
    21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
    22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
    23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

//21
const eleva = (numeros) => {
    if(!numeros) return console.warn('No ingresaste ningun dato');
    if(typeof numeros !== 'object') return console.error('Ingresaste un tipo de dato incorrecto');

    let lista = [];
    for(const elemento of numeros){ 
        let cuadrado = elemento*elemento; 
        lista.push(cuadrado);   
    }
    console.info(lista);
}

eleva()
eleva(4, 'f');
eleva([1, 4, 5]);
eleva([1, 4, 5, 7, 9, 12, 34]);


//22
const calcula = (numeros) => {
    if(!numeros) return console.warn('No ingresaste ningun dato');
    if(typeof numeros !== 'object') return console.error('Ingresaste un tipo de dato incorrecto');

    let numMax = (Math.max(...numeros));
    let numMin = (Math.min(...numeros)); 
    let lista = [];
    if(numMax && numMin) {
        lista.push(numMin, numMax);
    } 
    console.info(numeros)
    console.info(lista);
}

calcula()
calcula('d')
calcula([1, 4, 5, 99, -60]);
calcula([34, 4, 55, 87, 61]);


//23
const objePares = (numeros = undefined) => {
    if(!numeros) return console.warn('No ingresaste ningun dato');
    if(typeof numeros !== 'object') return console.error('Ingresaste un tipo de dato incorrecto');

    let nuevo = {
        pares: [],
        impares: []
    }
    for(const elemento of numeros){ 
        if (elemento == 1 || elemento == 3 || elemento == 5 || elemento == 7 || elemento == 9 || elemento % 2 !== 0){
            nuevo.impares.push(elemento);
        }else {
            nuevo.pares.push(elemento);
        }     
    }
    console.log(`{Pares: [${nuevo.pares}], Impares: [${nuevo.impares}]}`);


}

objePares();
objePares('g')
objePares([1,2,3,4,5,6,7,8,9,0]);