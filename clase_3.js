const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];

// Ejercicio 1
const personajesMenores = personajesSimpsons.filter ((personaje) => personaje.edad < 18);
//console.log(personajesMenores)

// Ejercicio 2
function sumarEdades(lista) {
    return lista.reduce((acu, personaje) => acu + personaje["edad"], 0);
}
const sumaEdades = sumarEdades(personajesMenores)

// Ejercicio 3
const nombresPersonajes = personajesSimpsons.map(personaje => personaje["nombre"]);

// Ejercicio 4
const cambiarRol = personajesSimpsons.map(({nombre, edad, rol}) => {
    if(edad < 18) {
      return {nombre, edad, rol: "Estudiante"};
    } else {
      return {nombre, edad, rol};
    }
  });


// Ejercicio 5
const personajesSimpsons2 = [
    { nombre: "Apu", edad: 36, rol: "Dueño de Kwik-E-Mart" },
    { nombre: "Krusty", edad: 54, rol: "Payaso" },
    { nombre: "Montgomery Burns", edad: 104, rol: "Jefe de la planta nuclear" }
];

const PersonajesUnidos = [...personajesSimpsons, ...personajesSimpsons2];