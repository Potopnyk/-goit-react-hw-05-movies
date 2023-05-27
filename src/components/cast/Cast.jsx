import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovies from "services/fetchAPI";
import css from './cast.module.css'

function Cast() {

    const [cast, setCast] = useState([])
    const { movieId } = useParams();
    const fetchParams = `movie/${movieId}/credits?api_key=`;

    useEffect(() => {
        getMovies(fetchParams)
            .then(response => setCast(response.cast))
            .catch(error => { console.log(error) });
    }, [fetchParams]);

    return (<div className={css.cast}>
                <ul>
            {cast.map(artist => {
                        const profile = `https://image.tmdb.org/t/p/${artist.profile}`;
                return <li key={artist.id}>
                            
            <img
                src={profile}
                alt={artist.profile}
                width="138"
                height="175"
            />
            {artist.original_name} ({artist.character})
                        </li>
                    })}
                </ul>
            </div>)
}

export default Cast;
    

