import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovies from "services/fetchAPI";
import css from './reviews.module.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
        const fetchParams = `movie/${movieId}/reviews?api_key=`;

    useEffect(() => {
        getMovies(fetchParams)
            .then(response => setReviews(response.results))
            .catch(error => { console.log(error) });
    }, [fetchParams]);
    
    return <div>
                <ul className={css.ul__review}>
                    {reviews.map(review => {
                        return <li className={css.list__review} key={review.id}>
                            <a href={review.url}>{review.author}</a>
                        </li>
                    })}
                </ul>
            </div>
};

export default Reviews;