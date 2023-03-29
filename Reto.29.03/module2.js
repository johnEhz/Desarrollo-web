//Módulo 2
import { Estudiante, Materia } from "./module.js";
const Estudiantes = [];

const addNewStudent = ({ Estudiante, Materias, Estudiantes }) => {
  console.log(`Un nuevo estudiante será agregado a la lista, su nombre es ${Estudiante.nombre}`)
  Estudiante.materias = [...Materias];
  console.log(`Información de sus materias: `)
  Estudiante.obtenerMaterias()
  Estudiantes.push(Estudiante);
};

addNewStudent({
    Estudiante: new Estudiante({
      nombre: "Juan",
      apellido: "Hernandez",
      edad: 21,
      telefono: 4432343,
      genero: "M",
      semestre: 7,
    }),
    Materias: [
      Materia,
      {
        nombre: "Matemáticas",
        creditos: 3,
        año: 2018,
        semestre: 9,
        requisitos: [],
      },
    ],
    Estudiantes
  });
  
console.log('')

  addNewStudent({
    Estudiante: new Estudiante({
      nombre: "Geo",
      apellido: "Perez",
      edad: 56,
      telefono: 543656546,
      genero: "F",
      semestre: 8,
    }),
    Materias: [
      Materia,
      {
        nombre: "Desarrollo de la Creatividad",
        creditos: 2,
        año: 2019,
        semestre: 2,
        requisitos: [],
      },
    ],
    Estudiantes
  });
  
  console.log(Estudiantes);

//
