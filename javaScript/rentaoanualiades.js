var formulario = document.forms.formulario_rentaAn
var resultado = document.getElementById("res-rentaAnu")

formulario.monto.oninput = calcularAV
formulario.años.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let V = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total =((Math.log10((s*i)+r))-Math.log10(r))/(Math.log10(1+i))
//((Math.log10((s = i + r(1+i))-(Math.log10(r(1+i))/(Math.log10(1+i))))
// 
    resultado.innerHTML = total.toFixed(2)
}