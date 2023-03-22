// PUNTO 1
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
        return `${this.tipo} Acelerando, Placas: ${this.placa}`
    }
}

console.log(vehiculo)
console.log(vehiculo.acelerar())

// PUNTO 2
class Vehiculo {
    constructor({ tipo, color, matricula, cv, placa='Sin placa' }) {
        this.tipo = tipo
        this.color = color
        this.matricula = matricula
        this.cv = cv
        this.velocidad = 0 //km/h
        this.placa = placa
    }

    acelerar() {
        this.velocidad += 10
        if (this.velocidad > 140) this.velocidad = 140
        return `${this.tipo} Acelerando, Velocidad: ${this.velocidad}`
    }

    frenar() {
        this.velocidad -= 5
        if (this.velocidad < 0) this.velocidad = 0
        return `${this.tipo} Frenando, Velocidad: ${this.velocidad}`
    }
}

const automovil = new Vehiculo({ tipo:'Automovil', color:'Gris', matricula:'FTG231', cv:100 })
console.log(automovil)
console.log(`Velocidad: ${automovil.velocidad}`)
console.log(automovil.acelerar())
console.log(automovil.acelerar())
console.log(automovil.acelerar())
console.log(automovil.acelerar())
console.log(automovil.frenar())
console.log(automovil.frenar())
console.log(automovil.frenar())


//PUNTO 3
const getObjectsInformation = ({ firstObject, classVehicle }) => {
    console.log(firstObject)
    console.log(classVehicle)
}

getObjectsInformation({ firstObject:vehiculo, classVehicle:automovil })