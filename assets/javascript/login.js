function login(){
    let usuarios = JSON.parse( localStorage.getItem("usuarios") );
    console.log(usuarios)
    let gmail = document.querySelector("#gmail").value;
    let password = document.querySelector("#password").value;
    console.log(usuarios.email);
    if(gmail && password){
        if(gmail == usuarios.email) {
            if(password == usuarios.password){
                validarUsuarioLogeado("1")
            }else{
                alert("Contraseña Incorrecta")
            }
        }else{
            alert("¡El usuario no existe!")
        }
    }else{
        alert('Todos los datos son necesarios');
    }
}

function validarUsuarioLogeado(dato){
    localStorage.setItem("usuarioLogueado", dato)
}

function registro(){
    let gmail = document.querySelector("#gmail").value;
    let password = document.querySelector("#password").value;

    if(gmail && password) {
        console.log(gmail, password)
        let array = [];
        datos = JSON.stringify({
            email: gmail,
            password: password
        });
        array.push(datos);
        localStorage.setItem("usuarios", array);
    }else{
        alert('Todos los datos son necesarios');
    }
    
}