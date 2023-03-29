import { multiplicar, nombre } from './module.js'

console.log('Funcionando!')
const saludar = (nombre, apellido) => `Hola ${nombre} ${apellido}`
console.log(saludar(nombre, 'Hz'))
console.log(`Resultado multiplicacion (5 x 3): ${multiplicar(5, 3)}`)