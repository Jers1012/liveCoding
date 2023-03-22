// Escribe tu código aquí.

/* Función de palabras
En este reto reforzarás tus conocimientos en JavaScript, creando funciones, trabajando con arreglos y strings, y manipulando del DOM para mostrar los resultados al usuario.

1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

Escribe una función que reciba 2 parámetros
Parámetro 1 - Un string
Parámetro 2 - Un array de strings
La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
Ejemplo:
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
bigWords('bocina', myArray);
Output - ['insecto', 'bootcamp', 'escritorio'] */

function orden(string,arr){//se crea la funcion que recorrera el arreglo y guardara cada palabra en el mismo
    let palabras=[];

    for(let i=0; i <arr.length; i++){//este for recorera el arreglo para ir gregando elementos
        if(arr[i].length>string.length){//se hace la comparcion del tamaño añade un elemento
            palabras.push(arr[i]);
        }
    }    
    return palabras;//regresa el arreglo
}

const palabra = "bocina";

const palabras=['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

const palabraLarga = orden(palabra,palabras);// se llama a la funcion y se pasa los parametros

console.log(palabraLarga);//imprime en consola.
