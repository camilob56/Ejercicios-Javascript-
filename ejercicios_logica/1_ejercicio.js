/**
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

// 1
const contarCaracteres = (text = '') => {
    (!text)
        ?console.warn('No ingresaste una cadena de texto')
        :console.info(text.length);
}

contarCaracteres();
contarCaracteres('Hola Mundo');

// 2
const recortaTexto = (text, r = undefined) => {
    (!text)
        ?console.warn('No ingresaste una cadena de texto')
    :(r === undefined) 
        ? console.warn('No ingresaste el numero de caracteres que quieres recortar')
    :(r < 1)
        ? console.warn('No puedes ingresar numeros negativos')
        : console.info(text.substr(0, r))
}

recortaTexto();
recortaTexto('Hola Mundo');
recortaTexto('Hola Mundo', 0);
recortaTexto('Hola Mundo', 4);

// 3
const separaTextos = (text, s = undefined) => {
    (!text)
        ?console.warn('No ingresaste una cadena de texto')
    :(s === undefined) 
        ? console.warn('No ingresaste el caracter separador')
        : console.info(text.split(s))
}

separaTextos();
separaTextos('hola que tal');
separaTextos('hola que tal', ' ');

// 4
const repiteTexto = (text, r = undefined) => {
    (!text)
        ?console.warn('No ingresaste una cadena de texto')
    :(r === undefined) 
        ? console.warn('No ingresaste el numero de veces que quieres repetir la cadena de texto')
    :(r < 1)
        ? console.warn('No puedes ingresar numeros negativos')
        : console.info(text.repeat(r))
}

repiteTexto();
repiteTexto('Hola Mundo ');
repiteTexto('Hola Mundo ', 3);