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
    <>
      <div className='header-comics'>
        <img src="/img/icono-busqueda.png" className="header-comics__logo" alt="Icono marvel" />
        <h1 className="header-comics__titulo">Search</h1>
      </div>
      

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>

          <form onSubmit={onSearchSubmit}>
            <input type="text" className=" form-control" placeholder="Search hero" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange} />
            <button className="btn btn-outline-primary mt-3"> Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />


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


    </>
  )
}

export { SearchPage }
