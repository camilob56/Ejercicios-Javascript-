/**
    9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
    10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
    11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

//9
const aleatorio = (min = undefined, max = undefined) => {
    (min === undefined)
        ?console.warn('No ingresaste el numero minimo')
    :(max === undefined)
        ?console.warn('No ingresaste el numero maximo')
        :console.info(Math.floor(Math.random() * (max - min) + min));
}

aleatorio()
aleatorio(1, )
aleatorio(501, 600);

//10
const capicua = (numero = undefined) => {
    if(!numero) return console.warn('No ha ingresado un numero');
    if(numero < 1) return console.warn('El numero no puede ser negativo');

    let reverse = parseInt(numero.toString().split("").reverse().join(""));
    if(numero === reverse){
        return console.info(`El numero ${numero} al revés es ${reverse}, Si es capicúa`)
    }
    return console.warn(`El numero ${numero} al revés es ${reverse}, No es capicúa`)
}

capicua();
capicua(-76);
capicua(923);
capicua(2002);


//11
const factorial = (num = undefined) => {
    if(!num) return console.warn('No ha ingresado un numero');

    if(typeof num !== 'number') return console.warn('Por favor verifica que no estes ingresando un tipo de dato diferente a numero');

    if(num < 1) return console.warn('El numero no puede ser negativo');

    let f = 1;
    for(let i = 1; i <= num; i++) {
        f = f*i;  
    }
    console.log(f);
}

factorial();
factorial('3');
factorial(-5);
factorial(5);