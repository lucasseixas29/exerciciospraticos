function somar(){
    var nota1 = parseFloat(document.getElementById("nota1").value)
    var nota2 = parseFloat(document.getElementById("nota2").value)

    var media = (nota1 + nota2)/2 ;


if( media >= 7 ) 
    if( media == 10) {
      alert (`APROVADO COM EXCELÊNCIA com a média  ${media}`)
  } else {
      alert(`aprovado com a média ${media}`)
  }   else if (media <7 ) {
    alert("Infelizmente foi reprovado.")
  } else { 
      alert('DIGITE AS NOTAS')
  }
  

    






}
