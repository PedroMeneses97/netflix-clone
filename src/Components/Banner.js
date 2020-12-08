import React, {useState, useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'

function Banner() {

    // Criar o useState para criarmos a lógica por detrás do banner
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData()  {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
            ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }

 
    return (
        <header className="Banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}> 
            <div className="Banner_Contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?. original_name}</h1>
                    <p className="banner_description">{truncate(movie?.overview, 150)}</p>
                <div className="Banner_Buttons">
                    <button className="banner_button">PLAY</button>
                    <button className="banner_button">My list</button>
                </div>
            </div>
            <div className="banner--fadeBottom"></div>
           
        </header>
    )
}

export default Banner
