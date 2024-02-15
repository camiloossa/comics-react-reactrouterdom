import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

const HeroPage = () => {

  const { id } = useParams();
  const publisher = id.split('-');

  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to={`/${publisher[0]}`} />
  }

  return (
    <div className="heroe-page">
      <div className="heroe-page__img">
        <img src={`/heroes/${id}.jpg`} class="heroe-page__img-heroe" alt={hero.superhero} />
      </div>

      <div className="heroe-page__caja">
        <h3 className="heroe-page__heading">{hero.superhero}</h3>
        <div className="heroe-page__body">
          <ul className="heroe-page__descripcion">
            <li className="heroe-page__item"> <b>Alter ego: </b> {hero.alter_ego}</li>
            <li className="heroe-page__item"> <b>First Appearcen: </b> {hero.first_appearance}</li>
            <li className="heroe-page__item"> <b>Publisher: </b> {hero.publisher}</li>
          </ul>
          <h5 className="heroe-page__titulo">Characters</h5>
          <p className="heroe-page__texto">{hero.characters}</p>
        </div>

        <div className="heroe-page__footer">
          <button className="heroe-page__btn" onClick={() => navigate(-1)}>Regresar</button>
        </div>
      </div>
    </div>
  )
}

export { HeroPage }
