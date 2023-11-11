
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuarioLogueado = localStorage.getItem("usuarioLogueado");


function enviarIniciarSesion() {
   window.location.href="/login.html"
}

function enviarHome() {
   window.location.href="/home.html"
}

function validarUsuarioLogeado(){
   console.log(usuarioLogueado == 1);
   if(usuarioLogueado == 1){
      enviarHome();
   }else{
      enviarIniciarSesion();
   }
}