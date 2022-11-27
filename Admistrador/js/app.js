var usuarios=["admin"];
var contraseñas=["admin"];

function validar(){
    var usuarioR=document.getElementById("Name").value; 
    var contraseña1=document.getElementById("Contraseña").value;

    for(var i=0; i<usuarios.length; i++) 
    {
        if(usuarioR == usuarios[i])
        {
            for(var j=0; j<contraseñas.length; j++) 
            {
                if(contraseña1 == contraseñas[j])
                {
                    window.location.href = "../Tabla/index.html";
                }
                else
                {
                    alert("Contraseña incorrecta.\nPor favor, confirma tu contraseña.");
                }
            }
        }
        else
        {
            alert("¡Aún no te has registrado!");
        }
    }
}