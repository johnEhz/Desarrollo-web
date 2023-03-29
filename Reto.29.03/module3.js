export const clients = [
  {
    ID: 0,
    nombre: "Juan",
    apellido: "Ramirez",
    compras: [
      {
        producto: "Computador",
        cantidad: 2,
        total: 2000000,
      },
      {
        producto: "Telefono",
        cantidad: 1,
        total: 800000,
      },
    ],
  },
];

export const addClient = ({ nombre, apellido, compras, clientList=clients }) => {
    const newClientID = Math.max(...clientList.map(client => client.ID)) + 1
    clients.push({
        ID: newClientID,
        nombre,
        apellido,
        compras: [...compras]
    })
};

export const removeClient = ({ clientID, clientList=clients }) => {
    clientList = clientList.filter(client => client.ID !== clientID)
};

export const updateClient = ({
  clientID,
  nuevoNombre,
  nuevoApellido,
  nuevasCompras,
  clientList=clients
}) => {
    const requestedCondition = (item) => item.id === clientID
    const idx = clientList.findIndex(requestedCondition)
    clientList[idx].nombre = nuevoNombre
    clientList[idx].apellido = nuevoApellido
    clientList[idx].nuevasCompras = [...nuevasCompras]
};

export const hanndleClientOperations = ({
  operation,
  addClient,
  removeClient,
  updateClient,
  information
}) => {
  switch (operation) {
    case "add":
        console.log('Adding new client!')
        const { nombre, apellido, compras } = information
        addClient({ nombre, apellido, compras })
      break;
    case "remove":
        console.log('Removing client!')
        const { ID } = information
        removeClient({ clientID: ID })
      break;
    case "update":
        console.log('Updating client!')
        const { clientID, nuevoNombre, nuevoApellido, nuevasCompras } = information
        updateClient({ clientID, nuevoNombre, nuevoApellido, nuevasCompras })
      break;
    default:
      console.log(`Expresión ${operation} no soportada...`);
  }
};
