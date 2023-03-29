//Módulo 1
class Persona {
    constructor({ nombre, apellido, edad, telefono, genero }){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.telefono = telefono
        this.genero = genero
    }

    correr(){
        return `${this.nombre} ${this.apellido} se encuentra Corriendo`
    }

    caminar(){
        return `${this.nombre} ${this.apellido} se encuentra Caminando`
    }

    marcar({ phone }){
        return `${this.nombre} ${this.apellido} con teléfono: ${this.telefono} MARCANDO a: ${phone}`
    }
}

export class Estudiante extends Persona {
    constructor({ nombre, apellido, edad, telefono, genero, semestre }){
        super({ nombre, apellido, edad, telefono, genero })
        this.semestre = semestre
        this.materias = []
    }

    obtenerMaterias() {
        this.materias.map((materia, idx) => {
            console.log(`Materia ${idx + 1}`)
            console.log(`Nombre: ${materia.nombre}`)
            console.log(`Creditos: ${materia.creditos}`)
            console.log(`Año: ${materia.año}`)
            console.log(`Semestre: ${materia.semestre}`)
            console.log(`   Requisitos ${materia.requisitos.length} materias:`)
            materia.requisitos?.map((req, idx) => {
                console.log(`       Requisito #${idx + 1}`)
                console.log(`       Nombre: ${req.nombre}, Creditos: ${req.creditos}, Año: ${req.año}, Semestre: ${req.semestre}`)
            })
        })
    }
}

export const Materia = {
    nombre: 'Desarrollo Web',
    creditos: 5,
    año: 2019,
    semestre: 9,
    requisitos: [
        {
            nombre:'Matemáticas',
            creditos: 2,
            año: 2020,
            semestre: 9,
        },
        {
            nombre:'Cálculo',
            creditos: 4,
            año: 2021,
            semestre: 7,
        },
        {
            nombre:'Ingeniería de Software',
            creditos: 4,
            año: 2015,
            semestre: 6,
        }
    ]
}