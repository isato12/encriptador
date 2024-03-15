//declarando variables
const inputEncriptar = document.querySelector("#texto-enctriptar");
const inputMensaje = document.querySelector("#mensaje");

const btnEncriptar = document.querySelector(".btn_encrpitar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");
const btnCopiar = document.querySelector(".btn_copiar");

const letrasReplace = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptar() {
  const texto = inputEncriptar.value;
  let textoEncriptado = texto;
  for (let i = 0; i < letrasReplace.length; i++) {
      const regex = new RegExp(letrasReplace[i][0], "g");
      textoEncriptado = textoEncriptado.replace(regex, letrasReplace[i][1]);
  }
  inputMensaje.value = textoEncriptado;
  inputMensaje.style.backgroundImage = "none";
  inputEncriptar.value = "";
}


function desencriptar() {
  const textoEncriptado = inputMensaje.value;
  let textoDesencriptado = textoEncriptado;
  for (let i = 0; i < letrasReplace.length; i++) {
      const regex = new RegExp(letrasReplace[i][1], "g");
      textoDesencriptado = textoDesencriptado.replace(regex, letrasReplace[i][0]);
  }
  inputMensaje.value = textoDesencriptado
  // inputEncriptar.value = textoDesencriptado;
  inputEncriptar.value = "";
}


// function limpiarCampos() {
  
//   inputMensaje.value = "";
// }
function copiarAlPortapapeles() {
  inputMensaje.select();
  document.execCommand("copy");
  let parrafo = document.createElement('p');
  let contenidoParrafo = document.createTextNode("Texto copiado al portapapeles")
  parrafo.appendChild(contenidoParrafo);
  document.btnCopiar.insertBefore(parrafo, btnCopiar);
  inputMensaje.value = "";
}


btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarAlPortapapeles);
// btnEncriptar.addEventListener("click", limpiarCampos);
// btnDesencriptar.addEventListener("click", limpiarCampos);