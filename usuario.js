let inicio = ['juan.pizo.ueb@gmail.com'];
let password = ['1033098102'];

function cargar(){
    let usuario=document.getElementById("correo").value;
    let contra=document.getElementById("contraseña").value;

    if(usuario == inicio && contra == password)
    {
        window.location="mapeo.html";
    }
    else
    {
        alert("DATOS ERRONEOS")
    }
}