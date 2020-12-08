import axios from "axios";

/**Url base para fazer pedidos a API TMDB */
const instancia = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instancia;