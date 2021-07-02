//Se consume la libreria de modules
const { printFunction, find, findOne, randomStudent } = require('./modules/library.js'); // Se aplico la deconstruccion de objetos

//import library from './modules/library.js';
//algunas librerias solo funcionan con required
//required es una referencia a library 
//import trae la libreria completa y la monta

//. Dirección actual
//Dirección relativa comenzando desde donde estas parado

function main() {
    //printFunction('hola desde mi primera libreria');
    //Consulta de base de datos son sincronas requieren una espera
    //Simularemos la sincronia por setTimeOut
    printFunction('Iniciando aplicación');
    setTimeout(() => {
        printFunction('Aplicación iniciada');
        setTimeout(() => {
            printFunction('Consultando la base de datos');
            setTimeout(() => {
                find({ pro_plan: true }); //traer varios elementos que cumplen con una condición
                findOne({ id: 5421 });
            }, 2000);
        }, 2000);
    }, 3000);
}

//main();

//Ejecutas desde consola con 
//node nombrearchivo.js

//Deconstrucción de objetos
/* 
    Un objeto literal, se llama una de sus propiedades
    desde una variable a traves del objeto
*/
const user = {
    id: 42,
    verifed: true
}

const { id } = user;

//console.log(id);