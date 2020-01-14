try {
    const variables = require("./variables.js");
    const baseUrl= variables.baseUrl;
}catch(e){}

const input = document.querySelector("#pkm-search");
const getPkm = async() => {
    const id= input.value;
    try {
        const pokemon = await axios.get(`${baseUrl}/${id}`);
        //get image
        //get data
        
    }catch(err){

    }
}