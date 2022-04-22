function maior() {

let n1 = parseFloat(document.getElementById("numero1").value)
let n2 = parseFloat(document.getElementById("numero2").value)
let n3 = parseFloat(document.getElementById("numero3").value)

if(n1 >= n2 && n1>= n3) {

    alert('maior ' +n1)
} else if (n2>= n1 && n2>=n3) {
    alert('maior ' +n2)
} else if (n3>= n1 && n3>=n2){
    alert('maior ' +n3)
} else {
    alert('digite os números')
}

/*let maior = n1

if(n2 > maior)
maior = n2
if(n3> maior)
maior = n3

alert('Maior é: ' +maior)*/







}