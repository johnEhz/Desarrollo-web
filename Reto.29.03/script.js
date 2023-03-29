/**
 * Mínimo 2 modulos
 *
 * EL primer módulo debe tener:
 * Una clase que herede de otra
 * Un objeto que dentro de sus propiedades tenga otro objeto
 *
 * El segundo módulo debe tener:
 * Importación de la clase y el objeto
 * Función tipo flecha que haga uso del Objeto y clase importados
 *
 * Adicional:
 * Tercer módulo que contenga:
 * Una función tipo flecha que manipule arreglos con los métodos de arreglos.
 * Debe tener como parámetros de entrada el arreglo y una CallBack FN; debe poder exportarse...
 */

import "./module.js";
import "./module2.js";
import { hanndleClientOperations, clients, addClient, updateClient, removeClient } from "./module3.js";

alert("Working!");
console.log('Clientes Activos:')
console.log(clients);

hanndleClientOperations({
  operation: "add",
  addClient,
  information: {
    nombre: "John",
    apellido: "Hernandez",
    compras: [
      {
        producto: "Carro",
        cantidad: 2,
        total: 500000000,
      },
    ],
  },
});

hanndleClientOperations({
    operation: "add",
    addClient,
    information: {
      nombre: "Juan",
      apellido: "Geo",
      compras: [
        {
          producto: "Casa",
          cantidad: 2,
          total: 100000000,
        },
      ],
    },
  });



console.log(clients);

hanndleClientOperations({
    operation: "remove",
    removeClient,
    information: { ID: 0 },
  });

  console.log(clients);
