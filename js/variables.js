const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};
const pokemonList = [];

const getAllPokemon = async () => {
    try {
        const data = await axios.get(baseUrl);
        pokemonList.push();

    }catch(err){
        handleError;
    }
}


try {
    module.exports = {
        baseUrl,
        handleError
    }
}catch(e){}