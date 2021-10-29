import axios from "axios";

export const getHeroes = async (name) => {
    return await axios(`https://superheroapi.com/api.php/10227697953733690/search/${name}`)
}