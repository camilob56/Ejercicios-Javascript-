/**
    18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
    19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
    20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

//18
const cuentaNumero = (text = undefined) => {
    if(!text) return console.warn('No has ingresado ningun texto');
    if(typeof text !== 'string') return console.warn('No has ingresado un tipo valido de texto');

    let contV = 0;
    let contC = 0;
    for(const caracter of text){
        if(caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'){
            contV ++;
        } else if(caracter !== ' '){
            contC ++;
        }
        
        
    }
    console.log(`El texto ${text} tiene Vocales: ${contV}, Consonantes: ${contC}`);

};

cuentaNumero()
cuentaNumero(5)
cuentaNumero('Hola Mundo');


//19
const validaNombre = (name = undefined) => {
    if(!name) return console.error('No ha ingresado datos');
    if(typeof name !== 'string') return console.error('No has ingresado un tipo valido de texto');
    let caracteres = new RegExp(/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/);
    let validar = caracteres.test(name);
    if (validar === true) {
        return console.info(`Su nombre es: ${name}`);
    }
    return console.warn(`No se permiten caracteres especiales ${caracteres}`);

}

validaNombre();
validaNombre(5);
validaNombre('cerlio.');
validaNombre('Camilo Bernal');


//20
const validaEmail = (email = undefined) => {
    if(!email) return console.error('No ha ingresado datos');
    if(typeof email !== 'string') return console.error('No has ingresado un tipo valido de texto');

    let caracteres = new RegExp(/^\w+@(\w+\.)+\w{2,4}$/);
    let validar = caracteres.test(email);
    if (validar === true) {
        return console.info(`Su email es: ${email}`);
    }
    return console.warn(`Email: ${email}, no valido debe contener ${caracteres}`);
}


validaEmail();
validaEmail(5);
validaEmail('camilo');
validaEmail('camilo@gmail.com');
validaEmail('jonmircha@gmail.com');