let primerNumeroOperacion = 0;
let coma = false;
let segundoNumeroOperacion = 0;
let resultado;
let operacion = false;
let tipoDeOperacion = [];

const suma = () => {
    //ok
    let resultadoSuma = +primerNumeroOperacion + +segundoNumeroOperacion;
    return resultadoSuma;
};

const resta = () => {
    //ok
    let resultadoResta = (primerNumeroOperacion -= segundoNumeroOperacion);
    return resultadoResta;
};

const division = () => {
    //ok
    let resultadoDivision = (primerNumeroOperacion /= segundoNumeroOperacion);
    return resultadoDivision;
};

const multiplicacion = () => {
    //ok
    let resultadoMultiplicacion = (primerNumeroOperacion *=
        segundoNumeroOperacion);
    return resultadoMultiplicacion;
};

const resultadoCalculo = () => {
    //ok
    let resultadoMostrado = resultado.toFixed(3);
    document.querySelector("#resultado").innerHTML = resultadoMostrado;
    segundoNumeroOperacion = 0;
    primerNumeroOperacion = resultadoMostrado;
};

const introduccionNumeros = (numero) => {
    //ok
    let longitudDeNumeroPantalla = longitudNumero(primerNumeroOperacion);
    let longitudDeNumeroDosPantalla = longitudNumero(segundoNumeroOperacion);
    if (longitudDeNumeroPantalla > 9 || longitudDeNumeroDosPantalla > 9) {
    } else {
        if (primerNumeroOperacion === 0 && coma === false) {
            primerNumeroOperacion = numero;
            document.querySelector("#resultado").innerHTML =
                primerNumeroOperacion;
        } else if (
            (typeof primerNumeroOperacion === "number" ||
                typeof primerNumeroOperacion === "string") &&
            operacion === false
        ) {
            primerNumeroOperacion = parseFloat(
                `${primerNumeroOperacion}${numero}`
            );
            document.querySelector("#resultado").innerHTML =
                primerNumeroOperacion;
        } else if (
            operacion === true &&
            segundoNumeroOperacion === 0 &&
            coma === false
        ) {
            segundoNumeroOperacion = numero;
            document.querySelector("#resultado").innerHTML =
                segundoNumeroOperacion;
        } else if (
            operacion === true &&
            (typeof segundoNumeroOperacion === "number" ||
                typeof segundoNumeroOperacion === "string")
        ) {
            segundoNumeroOperacion = parseFloat(
                `${segundoNumeroOperacion}${numero}`
            );
            document.querySelector("#resultado").innerHTML =
                segundoNumeroOperacion;
        }
    }
};

const reset = () => {
    //ok
    document.querySelector("#resultado").innerHTML = 0;
    primerNumeroOperacion = 0;
    coma = false;
    segundoNumeroOperacion = 0;
    resultado;
    operacion = false;
    tipoDeOperacion = [];
};

const accionClicada = (accion) => {
    //ok
    if (accion === "+") {
        operacion = true;
        tipoDeOperacion = ["+"];
        coma = false;
    }
    if (accion === "-") {
        operacion = true;
        tipoDeOperacion = ["-"];
        coma = false;
    }
    if (accion === "*") {
        operacion = true;
        tipoDeOperacion = ["*"];
        coma = false;
    }
    if (accion === "/") {
        operacion = true;
        tipoDeOperacion = ["/"];
        coma = false;
    }
};

function igual() {
    //ok
    if (tipoDeOperacion == "+") {
        resultado = suma();
        resultadoCalculo();
    }
    if (tipoDeOperacion == "-") {
        resultado = resta();
        resultadoCalculo();
    }
    if (tipoDeOperacion == "*") {
        resultado = multiplicacion();
        resultadoCalculo();
    }
    if (tipoDeOperacion == "/") {
        resultado = division();
        resultadoCalculo();
    }
}

function decimal(signo) {
    //ok
    coma = true;
    signo = ".";
    if (operacion === false) {
        if (primerNumeroOperacion === 0) {
            primerNumeroOperacion = 0 + signo;
            return (document.querySelector("#resultado").innerHTML =
                primerNumeroOperacion);
        } else if (
            typeof primerNumeroOperacion === "string" ||
            primerNumeroOperacion % 1 !== 0
        ) {
        } else {
            primerNumeroOperacion = primerNumeroOperacion + signo;
            return (document.querySelector("#resultado").innerHTML =
                primerNumeroOperacion);
        }
    } else {
        if (segundoNumeroOperacion === 0) {
            segundoNumeroOperacion = 0 + signo;
            return (document.querySelector("#resultado").innerHTML =
                segundoNumeroOperacion);
        } else if (
            typeof segundoNumeroOperacion === "string" ||
            segundoNumeroOperacion % 1 !== 0
        ) {
        } else {
            segundoNumeroOperacion = segundoNumeroOperacion + signo;
            return (document.querySelector("#resultado").innerHTML =
                segundoNumeroOperacion);
        }
    }
}

function borrarUltimoNumero() {
    //ok
    let longitudDelNumero;
    let ultimoNumero;
    if (operacion === false) {
        primerNumeroOperacion = primerNumeroOperacion.toString().split("");
        longitudDelNumero = primerNumeroOperacion.length;
        ultimoNumero = primerNumeroOperacion.slice(
            longitudDelNumero - 1,
            longitudDelNumero
        );
        primerNumeroOperacion = primerNumeroOperacion.slice(
            0,
            longitudDelNumero - 1
        );
        if (ultimoNumero === ".") {
            coma = false;
            primerNumeroOperacion = primerNumeroOperacion.join("");
            primerNumeroOperacion = parseFloat(primerNumeroOperacion);
            document.querySelector("#resultado").innerHTML = parseFloat(
                primerNumeroOperacion
            );
        } else if (
            !isNaN(primerNumeroOperacion) &&
            primerNumeroOperacion.length < 1
        ) {
            primerNumeroOperacion = 0;
            document.querySelector("#resultado").innerHTML = parseFloat(
                primerNumeroOperacion
            );
        } else {
            primerNumeroOperacion = primerNumeroOperacion.join("");
            primerNumeroOperacion = parseFloat(primerNumeroOperacion);
            document.querySelector("#resultado").innerHTML = parseFloat(
                primerNumeroOperacion
            );
        }
    } else {
        segundoNumeroOperacion = segundoNumeroOperacion.toString().split("");
        longitudDelNumero = segundoNumeroOperacion.length;
        ultimoNumero = segundoNumeroOperacion.slice(
            longitudDelNumero - 1,
            longitudDelNumero
        );
        segundoNumeroOperacion = segundoNumeroOperacion.slice(
            0,
            longitudDelNumero - 1
        );
        if (ultimoNumero === ".") {
            coma = false;
            segundoNumeroOperacion = segundoNumeroOperacion.join("");
            segundoNumeroOperacion = parseFloat(segundoNumeroOperacion);
            document.querySelector("#resultado").innerHTML = parseFloat(
                segundoNumeroOperacion
            );
        } else if (
            !isNaN(segundoNumeroOperacion) &&
            segundoNumeroOperacion.length < 1
        ) {
            segundoNumeroOperacion = 0;
            document.querySelector("#resultado").innerHTML = parseFloat(
                segundoNumeroOperacion
            );
        } else {
            segundoNumeroOperacion = segundoNumeroOperacion.join("");
            segundoNumeroOperacion = parseFloat(segundoNumeroOperacion);
            document.querySelector("#resultado").innerHTML = parseFloat(
                segundoNumeroOperacion
            );
        }
    }
}

function longitudNumero(numero) {
    //ok
    return numero.toString().split("").length;
}
