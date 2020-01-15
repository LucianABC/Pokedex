try {
    const constantes = require("./constantes.js");
    const baseUrl= constantes.baseUrl;
    const handleError = constantes.handleError;
    const capitalizeFirstLetter = constantes.capitalizeFirstLetter;

    const getPkmJs = requier("./getPokemon.js");
    const input = getPkmJs.input;
    const currentPkm = getPkmJs.currentPkm;

}catch(e){}

const previousBttn = document.querySelector("#previous-pkm");
const nextBttn = document.querySelector("#next-pkm");


const nextPkm = async () => {
    
    input.value = currentPkm + 1;
    displayPkm();
    input.value = "";
}

const previousPkm = async () => {
    input.value = currentPkm - 1;
    displayPkm();
    input.value = "";
}

nextBttn.addEventListener("click", nextPkm);
previousBttn.addEventListener("click", previousPkm);