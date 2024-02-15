import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

const HeroPage = () => {

  const { id } = useParams();
  const publisher = id.split('-');  

  const hero = useMemo( () => getHeroById( id ), [ id ] ); 

  const navigate = useNavigate();

  if( !hero ) {
    return <Navigate to = {`/${publisher[0]}`} />
  }

  return (
    <div className="row mt-5">
        <div className="col-sm-4 col-12 animate__animated animate__fadeInLeft animate__faster">
          <img src={`/heroes/${ id }.jpg`} className="img-thumbnail " alt={ hero.superhero } />
        </div>

        <div className="col-sm-8 col-12 animate__animated animate__fadeInRight animate__faster">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego: </b> { hero.alter_ego }</li>
            <li className="list-group-item"> <b>Publisher: </b> { hero.publisher }</li>
            <li className="list-group-item"> <b>First Appearcen: </b> { hero.first_appearance }</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{ hero.characters }</p>

          <button className="btn btn-outline-info" onClick={ () => navigate(-1) }>Regresar</button>
        </div>
    </div>
  )
}

export  { HeroPage }
