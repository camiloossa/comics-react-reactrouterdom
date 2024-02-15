import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByText } from '../helpers';
import { HeroCard } from '../components';

const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heores = getHeroesByText(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <div className='search'>
      <div className='header-comics animate__animated animate__fadeInDown'>
        <img src="/img/icono-busqueda.png" className="header-comics__logo" alt="Icono marvel" />
        <h1 className="header-comics__titulo">Search</h1>
      </div>      

      <div className="busqueda">
        <div className="busqueda__caja animate__animated animate__fadeInLeft">
          <h3 className="busqueda__heading">Searching</h3>

          <form onSubmit={onSearchSubmit} className='busqueda__form'>
            <input type="text" className="busqueda__campo" placeholder="Search hero" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange} />
            <button className="busqueda__input"> Search</button>
          </form>
        </div>

        <div className="busqueda__caja animate__animated animate__fadeInRight">
          <h3 className="busqueda__heading">Results</h3>   
          
          {
            (q === '')
            &&
            <div className='alert alert-info '>
              Search a hero
            </div>

          }

          {
            (q != '' && heores.length === 0)
            &&
            (<div className='alert alert-danger'>
              <span>No here data found with <b>{q}</b></span>
            </div>)
          }



          {
            heores.map(hero => <HeroCard key={hero.id} heroData={hero} />)
          }

        </div>
      </div>


    </div>
  )
}

export { SearchPage }
