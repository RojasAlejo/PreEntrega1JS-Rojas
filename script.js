
function calcularPromedio() {
    let sumaDeNotas = not1 + not2 + not3 + not4 + not5
    let promNotas = sumaDeNotas / 5

    if (promNotas => 6) {
        alert("¡El alumno " + alumno + " está aprobado!")
    } else {
        alert("El alumno " + alumno + " está desaprobado :(")
    }
}

calcularPromedio()

while(alumno != "ESC") {

    alert("A continuación deberá ingresar las 5 notas del alumno")
    alert('Para dejar de ingresar notas del alumno deberá ingresar "ESC"')
    let alumno = prompt("Ingrese el nombre del alumno")
    
    if (alumno == "ESC") {
        break
    } else {
        let not1 = parseInt(prompt("Ingrese la nota del alumno"))
        let not2 = parseInt(prompt("Ingrese la nota del alumno"))
        let not3 = parseInt(prompt("Ingrese la nota del alumno"))
        let not4 = parseInt(prompt("Ingrese la nota del alumno"))
        let not5 = parseInt(prompt("Ingrese la nota del alumno"))
        alert("El promedio de " + alumno + " es de: " + promNotas)
    }
}


