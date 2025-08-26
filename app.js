const amigosLista = [];


function agregarAmigo(){
    let amigos = document.getElementById('amigo').value;
    console.log(amigos)
    amigosLista.push(amigos)
    limpiarCaja()
    return;
}



















function limpiarCaja(){
    document.getElementById('amigo').value = "";
}

















