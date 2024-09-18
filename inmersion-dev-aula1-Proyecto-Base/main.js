let cantidad= document.getElementById('cantidad');
//let boton= document.getElementById('generar');
let contrasena= document.getElementById('contrasena');
//let botonLimpiar= document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz123456789!@#$%^&*()';

function generar() {

    let numeroDigitado = parseInt(cantidad.value);
  
    if (numeroDigitado < 8) {
        alert("La cantidad de carateres tiene que ser mayor a 8");
        return;    
    }
    
    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        
        let caracterAleatorio = cadenaCaracteres[Math.floor (Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password+=caracterAleatorio;
        
    }
    contrasena.value = password;  
    //console.log('password generada= ' + password); 

    // Llamada a la función para verificar la fortaleza de la contraseña
    verificarFortaleza(password);
}
function limpiarContrasena() {
    cantidad.value= '';
    contrasena.value= '';
    mensaje.innerText= ''; // Limpiar el mensaje también 
}

//Función para verificar si la contraseña es fuerte o débil
function verificarFortaleza(password) {
    const tieneNumero =/\d/.test(password); // Verifica si contiene al menos número
    const tieneMayuscula = /[A-Z]/.test(password); // Verifica si contiene al menos una letra mayúscula
    const tieneCaraterEspecial = /[!@#$%^&*()]/.test(password); //Verifica si contiene al menos un caracter especial

    if (tieneNumero && tieneMayuscula && tieneCaraterEspecial){
        mensaje.innerText = "La contraseña es fuerte";
        mensaje.style.color = "green"; // Estilo para mostrar que es fuerte

    }else{
        mensaje.innerText= "La contraseña es débil. Debe incluir al menos un número, una letra mayúscula y un carácter especial.";
        mensaje.style.color = "red"; //Estilo para mostrar que es débil
    }
    
}









