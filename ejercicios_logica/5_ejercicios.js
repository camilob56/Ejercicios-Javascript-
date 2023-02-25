/**
    15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
    16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
    17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

//15
const convertir = (nro = undefined, base = undefined) => {
    if (base === 2 || base === 10) {
        let a = nro.toString();
        return base === 2

        ? console.info(parseInt(a, 2) + ` en base 10 `)
        : console.info(nro.toString(2) + ` en  base 2 `);  
    } 
    return console.info(`${base} No es base 10 o 2`);
}

convertir(100, 2);
convertir(4, 10);


//16
const montoFinal = (valor = undefined, desc = undefined) =>{
    if(!valor) return console.warn('No ingresaste el valor');
    if(!desc) return console.warn('No ingresaste el descuento');
    if(typeof valor !== 'number' || typeof desc !== 'number') return console.error('No ingresaste un tipo de dato valido, Solo numeros');

    let porc = valor*(desc/100)
    let total = valor-porc
    return console.info(`El ${desc}% de descuento de ${valor} es: ${total}` )
}

montoFinal();
montoFinal(4, '3');
montoFinal(1000,20);
montoFinal(800,4);


//17
const calculaAnios = (fecha = undefined) => { 
    if(!fecha) return console.warn('No ingresaste la fecha');
    let actual = new Date().getFullYear();
    let antes = fecha.getFullYear();
    let nacimiento = (actual-antes);
    console.info(`Han pasado ${nacimiento} años desde el año ${antes} hasta el actual ${actual}`);

}

calculaAnios()
calculaAnios(new Date(1994,5,1))
calculaAnios(new Date(1984,4,23))