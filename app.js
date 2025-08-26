const amigosLista = [];
const nombresLista = document.getElementById('listaAmigos')




function agregarAmigo(){
    let amigos = document.getElementById('amigo').value;
    
    
    if (amigos == ""){
    alert('Por favor, inserte un nombre')}
    else{
    amigosLista.push(amigos)};
    
    nombresLista.innerHTML = "" 
    
    for (let i = 0 ; i < amigosLista.length ; i++){
        const listaVisible = document.createElement('li');
        listaVisible.textContent = amigosLista[i];
    
        nombresLista.appendChild(listaVisible);
    
    }

    
    
    console.log(amigosLista);
    console.log(amigos);
     
    limpiarCaja();
    return;
    
}





function limpiarCaja(){
    document.getElementById('amigo').value = "";
}
