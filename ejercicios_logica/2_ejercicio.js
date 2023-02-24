/*  5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
    6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
    8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

//5
const invertirCadena = (texto = '') => {
    (!texto)
        ?console.warn('No ingresaste una cadena de texto')
        :console.info(texto.split('').reverse().join(''))
}

invertirCadena();
invertirCadena('Hola mundo');


//6
const contarRepetidos = (texto = '', palabra) => {
    if(!texto) return console.warn('No ingresaste una cadena de texto');      
    if(!palabra) return console.warn('No ingresaste la palabra que quieres buscar')
    let palabras = texto.split(' ');
    let cont = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra) {
        cont ++;
        }
    }
    console.info(`La palabra ${palabra} se repite ${cont} veces`)
}

contarRepetidos();
contarRepetidos('hola mundo mundo adios');
contarRepetidos('hola mundo mundo adios mundo', 'mundo');


//7
const palindromo = (text) => {
    if(!text) return console.warn('No ingresaste una cadena de texto');  

    let reversed = text.split('').reverse().join('');

    if (text.toLowerCase() === reversed.toLowerCase()) {
        console.info(`La palabra ${text} es un palíndromo`);
        return true;
    } else {
        console.warn(`La palabra ${text} no es un palíndromo`);
        return false;
    }
}  

palindromo()
palindromo('salas')
palindromo('hijo')
palindromo('bruno')
palindromo('reconocer')


//8
const eliminaTexto = (texto = '', elimina = '') => {
    (!texto)
        ?console.warn('No ingresaste una cadena de texto')
        :(elimina === '')
        ?console.warn('No ingresaste la palabra a eliminar de la cadena de texto')
        :console.info(texto.replaceAll(elimina, ''));
}

eliminaTexto();
eliminaTexto('xyz1, xyz2, xyz3, xyz4 y xyz5')
eliminaTexto('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');