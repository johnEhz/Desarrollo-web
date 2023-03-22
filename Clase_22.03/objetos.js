const persona = {
    firstName: 'John',
    lastName: 'Hernandez',
    age: 21,
    id: 100001234343,
    saludar: function() {
        return `Holaa ${this.firstName} ${this.lastName}`
    }
}

console.log(persona)
console.log(persona.saludar())
console.log(persona.firstName)
console.log(persona['lastName'])

class Persona {
    constructor({ firstName, lastName, caracteristicas }) {
        this.firstName = firstName
        this.lastName = lastName
        this.caracteristicas = {
            colorOjos: caracteristicas.colorOjos,
            colorCabello: caracteristicas.colorCabello,
            altura: caracteristicas.altura
        }
    }

    saludar() {
        return `Hola ${this.firstName} ${this.lastName}, mido ${this.caracteristicas.altura}. Mis ojos son ${this.caracteristicas.colorOjos}`
    }
}

const newPersona = new Persona({ firstName:'Andres', lastName:'Hernandez',
    caracteristicas: {
        colorOjos: 'negros',
        colorCabello: 'rojo',
        altura: 1.80
    } })
console.log(newPersona)
console.log(newPersona.saludar())
newPersona.firstName = 'Nuevo nombre!'
console.log(newPersona)
console.log(newPersona.saludar())

class Trabajador extends Persona {
    constructor({ firstName, lastName, cargo, salario, caracteristicas }){
        super({ firstName, lastName, caracteristicas })
        this.cargo = cargo
        this.salario = salario
    }

    getInformation() {
        return `Soy ${this.firstName} ${this.lastName}, ${this.cargo}. Salary: ${this.salario}`
    }
}

const trabajador = new Trabajador({ firstName:'Homer', lastName:'Jonek', cargo:'Software Engineering', salario:10000000, caracteristicas: {
    colorCabello: 'marron',
    colorOjos: 'azul',
    altura: 1.90
} })
console.log(trabajador)
console.log(trabajador.getInformation())
console.log(trabajador.saludar())

// ---------------------------------------------------------------------------------

const vehiculo = {
    placa: 'FDT353',
    tipo: 'Wagon',
    caracteristicas: {
        color: 'gris',
        cv: 200,
        pasajeros: 5,
        altura: 1.90,
        anchura: 2.10,
        largo: 4.3
    },
    acelerar: function() {
        return `${this.tipo} Acelerando`
    }
}

class Vehiculo {
    constructor({ tipo, color, matricula, cv }) {
        this.tipo = tipo
        this.color = color
        this.matricula = matricula
        this.cv = cv
        this.velocidad = 0 //km/h
    }

    acelerar() {
        this.velocidad += 10
        return `${this.tipo} Acelerando!!`
    }

    frenar() {
        this.velocidad -= 5
        return `${this.tipo} Frenando!!`
    }
}


console.log(vehiculo)
const automovil = new Vehiculo({ tipo:'Automovil', color:'Gris', matricula:'FTG231', cv:100 })
console.log(automovil)