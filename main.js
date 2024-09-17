
const sumar = (num1, num2) => parseInt(num1) + parseInt(num2);
const restar = (num1, num2) => parseInt(num1) - parseInt(num2);
const multiplicar = (num1, num2) => parseInt(num1) * parseInt(num2);
const dividir = (num1, num2) => num2 === "0" ? "No se puede dividir por cero" : parseInt(num1) / parseInt(num2);

let continuar = true;

while (continuar) {
    let numero1 = prompt("Ingrese el primer número:");
    let numero2 = prompt("Ingrese el segundo número:");
    let operacion = prompt("Seleccione una operación (+, -, *, /):");

    switch (operacion) {
        case "+":
            resultado = sumar(numero1, numero2);
            break;
        case "-":
            resultado = restar(numero1, numero2);
            break;
        case "*":
            resultado = multiplicar(numero1, numero2);
            break;
        case "/":
            if (numero2 === 0) {
                resultado = "No se puede dividir por cero";
            } else {
                resultado = dividir(numero1, numero2);
            }
            break;
        default:
            console.log("Operación no válida");
    }
    alert("El resultado es: "+ resultado);

    let respuesta = prompt("¿Desea realizar otro cálculo? (si/no):");
    continuar = respuesta === "si" || respuesta === "SI" || respuesta === "sI" || respuesta === "Si" ;
}