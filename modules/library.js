//Archivo que contiene funcionalidades especificas

//Exportar libreria atraves de modelues.export para usarlo en main
module.exports.printFunction = (something) => {
    console.log(something);
}

//Para el ejemplo nuestra bdd es un array
const userDB = [{
        id: 5421,
        name: 'pedro',
        nivel: 18,
        pro_plan: true
    },
    {
        id: 5422,
        name: 'pablo',
        nivel: 15,
        pro_plan: true
    },
    {
        id: 5431,
        name: 'juan',
        nivel: 1,
        pro_plan: false
    }
]

module.exports.find = (filter) => {
    //Object.keys Conocer las llaves de un objeto, regresa un array con los nombres
    const firstKey = Object.keys(filter)[0]; //Objeto de JS que permite crear objetos
    const result = userDB.filter((user) => {
        return user[firstKey] === filter[firstKey];
    });
    console.table(result);
    return result;
}

module.exports.findOne = (filter) => {
    const firstKey = Object.keys(filter)[0];
    //Recorre el array hasta que la condición se satisfaga y termina el metodo
    const result = userDB.find((user) => {
        return user[firstKey] === filter[firstKey];
    })
    console.table(result);
    return result;
}

/* BASE DE DATOS PARA EL EJERCICIO, EL NOMBRE LO IMPRIME EN LA CONSOLA, EL PRIMER ELEMENTO ES CERO*/
const alumnosDB = [
    { name: 'Arcadio' },
    { name: 'Citlali' },
    { name: 'Emmanuel' },
    { name: 'Alberto' }
];
/* BASE DE DATOS PARA EL EJERCICIO, EL NOMBRE LO IMPRIME EN LA CONSOLA, EL PRIMER ELEMENTO ES CERO*/
//Se exporta la funcion randomStudent y se llama desde el archivo donde se utilizará
module.exports.randomStudent = () => {
    const alumnoRandom = Math.random() * 3;
    const alumnoRandom2 = Math.floor(alumnoRandom);
    return alumnosDB[alumnoRandom2].name;
}