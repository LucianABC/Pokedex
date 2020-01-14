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
        return pokemon.data       
    }catch(err){
        handleError
    }
}

const displayPkm = async () =>{
    let pokemon = await getPkm();

    const img = document.querySelector("#pkm-img");
    img.setAttribute("src", pokemon.sprites.front_default);

    const nameSpan = document.querySelector("#pkm-id-name");
    nameSpan.innerHTML = `${pokemon.id} - ${pokemon.name}`;

    const mainAbilitySpan = document.querySelector("#pkm-ability");
    mainAbilitySpan.innerHTML=pokemon.abilities[0].ability.name;

    const typesDiv = document.querySelector("#pkm-types");
    const types = pokemon.types;

    for (let type of types) {
        let span = document.createElement("span");
        span.innerHTML = type.type.name;
        span.classList.add(`type-${type.type.name}`);
        typesDiv.appendChild(span);
    }

}

const submitSearch = document.querySelector("#submit-bttn");

submitSearch.addEventListener("click", displayPkm);