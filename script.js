const textoArea = document.querySelector(".input-texto");
const cajaMensaje = document.querySelector(".caja-mensajes");
document.getElementById('mensaje-1').style.display = 'none';
document.getElementById('mensaje-2').style.display = 'none';

function botonEncriptar(){
    if (textoArea.value != 0) {
        const textoEncriptado = encriptar(textoArea.value);
        cajaMensaje.value = textoEncriptado;
        textoArea.value = ""; //para limpiar el campo
        document.getElementById('logo2').style.display = 'none'; // para esconder la imagen a traves del id de la imagen
        document.getElementById('mensaje-1').style.display = 'none';
        document.getElementById('mensaje-2').style.display = 'none';
    } else {
        document.getElementById('mensaje-1').style.display = 'block';
        document.getElementById('mensaje-2').style.display = 'block';
    }
    
}
function encriptar(cadena) {
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizLlaves);
    cadena = cadena.toLowerCase()
    for (let i = 0; i < matrizLlaves.length; i++) {
        if (cadena.includes(matrizLlaves[i][0])) {
            cadena = cadena.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1])     
        }
    }
    return cadena
}

function botonDesencriptar() {
    if (textoArea.value != 0) {
        const textoDesencriptado = desencriptar(textoArea.value);
        cajaMensaje.value = textoDesencriptado;
        textoArea.value = "";
        document.getElementById('logo2').style.display = 'none'; // para esconder la imagen a traves del id de la imagen
        document.getElementById('mensaje-1').style.display = 'none';
        document.getElementById('mensaje-2').style.display = 'none';
    } else {
        document.getElementById('mensaje-1').style.display = 'block';
        document.getElementById('mensaje-2').style.display = 'block';
    }
}

function desencriptar(cadena) {
    let matrizLlaves = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadena = cadena.toLowerCase();
    for (let i = 0; i < matrizLlaves.length; i++) {
        if (cadena.includes(matrizLlaves[i][1])) {
            cadena = cadena.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0])
        } 
    }
    return cadena
}

document.getElementById("copiando").onclick = function() {
    var text = document.getElementById("mensajes").value;
    clipboard.writeText(text);
}