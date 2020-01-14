try {
    const variables = require("./variables.js");
    const baseUrl= variables.baseUrl;
    const handleError = variables.handleError;
    const capitalizeFirstLetter = variables.capitalizeFirstLetter;

}catch(e){}

const input = document.querySelector("#pkm-search-input");

const getPkm = async() => {
    let id= input.value;
    id = id.toLowerCase();

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
    let pokemonName = capitalizeFirstLetter(pokemon.name);
    nameSpan.innerHTML = `${pokemon.id} - ${pokemonName}`;

    const mainAbilitySpan = document.querySelector("#pkm-ability");
    let ability = capitalizeFirstLetter(pokemon.abilities[0].ability.name);
    mainAbilitySpan.innerHTML=ability;

    const typesDiv = document.querySelector("#pkm-types");
    const types = pokemon.types;

    for (let type of types) {
        let span = document.createElement("span");
        let typeName = capitalizeFirstLetter(type.type.name);
        span.innerHTML = typeName;
        span.classList.add(`type-${type.type.name}`);
        typesDiv.appendChild(span);
    }

}

const submitSearch = document.querySelector("#submit-bttn");

submitSearch.addEventListener("click", displayPkm);