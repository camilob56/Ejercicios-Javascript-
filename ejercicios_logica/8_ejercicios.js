/**
    24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
    25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
    26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

//24
const ascDes = (numbers) => {
    if(!numbers) return console.warn('No ingresaste ningun dato');
    if(typeof numbers !== 'object') return console.error('Ingresaste un tipo de dato incorrecto');

    let asc = numbers.slice().sort((a, b) => a - b);
    let des = numbers.slice().sort((a, b) => b - a);

    return console.info({ascendientes: asc, descendientes: des});
}

ascDes();
ascDes(4);
ascDes([7, 5,7,8,6]);


//25
const eliminaDuplicados = (array) =>{
    if(!array) return console.warn('No ingresaste ningun dato');
    if(typeof array !== 'object') return console.error('Ingresaste un tipo de dato incorrecto');

    let duplicados = array.slice().sort();
    let nuevo = []

    for(let i = 0; i < duplicados.length; i++){
        if(nuevo.includes(duplicados[i])){
            continue;
        }else {
            nuevo.push(duplicados[i])
        }
    }
    console.info(nuevo)
    

}

eliminaDuplicados();
eliminaDuplicados('d');
eliminaDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


//26
const sacaPromedio = (numbers) => {
    if(!numbers) return console.warn('No ingresaste ningun dato');
    if(typeof numbers !== 'object') return console.error('Ingresaste un tipo de dato incorrecto');
    
    let suma = 0;
    let nuevo = numbers.reduce(
    (acum, valorActual) => acum + valorActual,
    suma
    );

    let recuento = numbers.length;
    let promedio = nuevo/recuento;
    console.info('El promedio es: '+ promedio);

}

sacaPromedio();
sacaPromedio('f');
sacaPromedio([9,8,7,6,5,4,3,2,1,0]);