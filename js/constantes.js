const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};
const pokemonList = [];

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


try {
    module.exports = {
        baseUrl,
        handleError,
        capitalizeFirstLetter
    }
}catch(e){}