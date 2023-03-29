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

class Camion extends Vehiculo {
    constructor({ tipo, color, matricula, cv, placa='Sin placa', carga, tipoCarga }) {
        super({ tipo, color, matricula, cv, placa:'Sin placa' })
        this.carga = carga
        this.tipoCarga = tipoCarga
    }
}

const automovil = new Vehiculo({ tipo:'Automovil', color:'Gris', matricula:'FTG231', cv:100 })
console.log(automovil)
console.log(`Velocidad: ${automovil.velocidad}`)
console.log(automovil.acelerar())
console.log(automovil.acelerar())
console.log(automovil.frenar())
console.log(automovil.frenar())

const camion = new Camion({  tipo:'Camion', color:'Rojo', matricula:'GTFASF', cv:300, carga:5000, tipoCarga:'Heno' })
console.log(camion)
console.log(`Velocidad: ${camion.velocidad}`)
console.log(camion.acelerar())
console.log(camion.acelerar())


//PUNTO 3
const OperarVehiculos = ({ Object, Vehicle }) => {
    console.log('Operando Objeto Vehículo')
    console.log(Object.acelerar())
    console.log(Object.acelerar())
    console.log(Object.caracteristicas)
    console.log('')
    console.log('Operando clase Camion')
    console.log(Vehicle.acelerar())
    console.log(Vehicle.acelerar())
    console.log(Vehicle.frenar())
}

OperarVehiculos({ Object:vehiculo, Vehicle:camion })