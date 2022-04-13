const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const button_s = document.getElementById("suma");
const button_r = document.getElementById("resta");
const button_d = document.getElementById("division");
const button_m = document.getElementById("multiplicacion");
const resultado = document.getElementById("resultado")

button_s.addEventListener("click", () => {
    let numeroA = parseInt(numero1.value)
    let numeroB = parseInt(numero2.value)
    resultado.innerHTML = `Tu resultado es ${numeroA + numeroB}`
    resultado.style.backgroundColor = "yellow"
}) 

button_r.addEventListener("click", () => {
    let numeroA = parseInt(numero1.value)
    let numeroB = parseInt(numero2.value)
    resultado.innerHTML = `Tu resultado es ${numeroA - numeroB}`
}) 

button_d.addEventListener("click", () => {
    let numeroA = parseInt(numero1.value)
    let numeroB = parseInt(numero2.value)
    resultado.innerHTML = `Tu resultado es ${numeroA / numeroB}`
}) 

button_m.addEventListener("click", () => {
    let numeroA = parseInt(numero1.value)
    let numeroB = parseInt(numero2.value)
    resultado.innerHTML = `Tu resultado es ${numeroA * numeroB}`
}) 





