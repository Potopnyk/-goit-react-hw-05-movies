import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/serviceAPI';
import css from './cast.module.css';
import PropTypes from 'prop-types';

import userImg from './image.jpg';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCast(movieId);
        setData(cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : data && data.length > 0 ? (
        <div className={css.list__wrap}>
          <ul className={css.list}>
            {data.map(({ name, character, profile_path, id }) => (
              <li key={id} className={css.list__item}>
                {profile_path ? (
                  <img
                    className={css.list__img}
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                  />
                ) : (
                  <img className={css.list__img} alt={name} src={userImg} />
                )}

                <p className={css.list__name}>{name}</p>
                <p className={css.list__character}>{character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={css.error}>No data found</p>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;