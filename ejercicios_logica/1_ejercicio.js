/**
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

// 1
const contarCaracteres = (text) => console.log(text.length);
contarCaracteres('Hola Mundo');

// 2
const recortaTexto = (text, r) => console.log(text.substr(0, r));
recortaTexto('Hola Mundo', 4);

// 3
const separaTextos = (text, s) => console.log(text.split(`${s}`));
separaTextos('hola que tal', ' ');

// 4
const repiteTexto = (text, r) => console.log(text.repeat(r));
repiteTexto('Hola Mundo ', 3)