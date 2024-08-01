
//====================================================
const stringManipular = document.getElementById("string-manipular").textContent;
const tamanhoString = document.getElementById("tamanho-string");
tamanhoString.textContent = stringManipular.length;
//====================================================
const indice = 7;
const  posicaoCaracter= document.getElementById("posicao-caracter");
const caracterEspecifico = document.getElementById("caracter-especifico");

posicaoCaracter.textContent = indice;
caracterEspecifico.textContent = stringManipular.charAt(indice);

//====================================================

const resultadoSubstituir = document.getElementById("resultado-substituir");
resultadoSubstituir.textContent = stringManipular.replace("escola", "a melhor escola");

//====================================================

const resultadoMinuscula = document.getElementById("resultado-minuscula");
resultadoMinuscula.textContent = stringManipular.toLowerCase();

//====================================================

const resultadoMaiuscula = document.getElementById("resultado-maiuscula");
resultadoMaiuscula.textContent = stringManipular.toUpperCase();

//====================================================

const stringComEspacos = document.getElementById("string-com-espacos").textContent;
const semEspacos = document.getElementById("sem-espacos");
semEspacos.textContent = stringComEspacos.trim();