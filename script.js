// SACAR PROMEDIO DE NOTAS DE UN ALUMNO
let notas
let promedio
let suma = 0

let alumno = prompt("Ingrese el nombre del alumno: ")
let nNotas = parseInt(prompt("Cantidad de notas que quiere cargar: "))


for(i = 0; i < nNotas; i++) {

    let notas = parseInt(prompt("Escriba las notas: " + i))
    suma = suma + notas

}

promedio = suma / nNotas
alert("El promedio de las notas es de: " + promedio)

if (promedio > 5) {
    alert("¡El alumno '" + alumno + "' está aprobado!")   
} else {
    alert("El alumno '" + alumno + "' está desaprobado :(")
}