/**
    12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
    13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
    14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 */

//12
const primo = (num = undefined) => {
    
    if(!num) return console.error('No ha ingresado un numero');

    if(typeof num !== 'number') return console.error('Por favor verifica que no estes ingresando un tipo de dato diferente a numero');

    if(num < 1) return console.warn('El numero no puede ser negativo');

    if (num == 0 || num == 1 || num == 4) return console.warn(`El numero ${num} no es primo`);

	for (let i = 2; i < num / 2; i++) {
		if (num % i == 0)  return console.warn(`El numero ${num} no es primo`);   
	}
	return console.info(`El numero ${num} si es primo`);
}
primo();
primo('34');
primo(-4);
primo(23);
primo(24);


//13
const pares = (num) => {

    if(!num) return console.error('No ha ingresado un numero');

    if(typeof num !== 'number') return console.error('Por favor verifica que no estes ingresando un tipo de dato diferente a numero');

    if(num < 1) return console.warn('El numero no puede ser negativo');
    
    if (num == 1 || num == 3 || num == 5 || num == 7 || num == 9) return console.warn(`El numero ${num} no es par`);

	if (num % 2 !== 0)  return console.warn(`El numero ${num} no es par`);  

	return console.info(`El numero ${num} si es par`);
}

pares();
pares('5');
pares(-4);
pares(8);
pares(29);


//14
const convertGrados = (g = undefined, t = undefined) => {
    if(g === 'C' || g === 'c'){
        let convertir = (t*(9/5)) + 32;
        return console.info(`${t}° Grados celsius = ${convertir}° Grados farenheit`);
    }else if(g === 'F' || g === 'f'){
        let convertir = ((t - 32)*(5/9));
        return console.info(`${t}° Grados farenheit = ${convertir}° Grados celsius`);
    }
    return console.warn('Por favor ingresa el tipo de grado y la temperatura');
}

convertGrados();
convertGrados('c', 1);
convertGrados('C', 0);
convertGrados('F', 0);