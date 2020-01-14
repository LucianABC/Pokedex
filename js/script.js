try {
    const variables = require("./variables.js");
    const baseUrl= variables.baseUrl;
    const handleError = variables.handleError;

}catch(e){}

const input = document.querySelector("#pkm-search");

const getPkm = async() => {
    const id= input.value;
    try {
        const pokemon = await axios.get(`${baseUrl}/${id}`);
    }catch(err){

    }
}

const submitSearch = document.querySelector("#submit-bttn");

submitSearch.addEventListener("click", getPkm);