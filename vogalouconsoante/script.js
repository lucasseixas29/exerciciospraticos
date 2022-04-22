function clicou() {

    let letra = document.getElementById('char').value
    letra = letra.toLowerCase()
    let button = document.getElementById('clique')
    let res = document.getElementById('res')
    if(letra == 'a'||letra == 'e' ||letra =='i'|| letra=='o'|| letra =='u') {

    alert(`A letra  é VOGAL`)

    
    }else if(letra ==''){

        alert('DIGITE UMA LETRA')

    } else {
        alert('CONSOANTE')

    }

}
        
    
    
    
    

    
    