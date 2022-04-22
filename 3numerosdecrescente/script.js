
alert('Qual turno você estuda?\nMatutino - Digite: m\n Vespertino - Digite: v\n Noturno - Digite : n')
function clique () {
    var turno = document.getElementById('turno').value

  
    if(turno == 'm'||turno =='M') {
    alert('Bom Dia')

    }else if (turno =='v'|| turno=='V') {
        alert('Boa Tarde')
    }else if (turno == 'n'||turno =='N') {
        alert('Boa Noite')
    } else {
        alert('INVÁLIDO')
    }

}