try {
    const variables = require("./variables.js");
    const baseUrl= variables.baseUrl;
    const handleError = variables.handleError;

}catch(e){}

const input = document.querySelector("#pkm-search-input");

let pokeId;
let pokeName;
let pokeImg;


const getPkm = async() => {
    const id= input.value;
    try {
        let pokemon = await axios.get(`${baseUrl}/${id}`);
        pokemon = pokemon.data;
        pokeName = pokemon.name;
        pokeId = pokemon.id;
        pokeImg = pokemon.sprites.front_default;

        
    }catch(err){

    }
}

const submitSearch = document.querySelector("#submit-bttn");

submitSearch.addEventListener("click", getPkm);