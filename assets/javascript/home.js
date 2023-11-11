let usuarios = JSON.parse( localStorage.getItem("usuarios") );
//LA PRIMERA LINEA OBTIENEN EL LOCALSTORAGE
console.log(usuarios);

function cerrarSesion(dato){
    if(dato){
        localStorage.setItem("usuarioLogueado", true);
    }else{
        localStorage.setItem("usuarioLogueado", false);
        window.location.href="index.html"
    }
    
}