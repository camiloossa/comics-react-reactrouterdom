import { HeroList } from '../components';

const MarvelPage = () => {
  return (
    <>
      <div className='header-comics'>
        <img src="./img/icono-marvel.png" className="header-comics__logo" alt="Icono marvel" />
        <h1 className="header-comics__titulo">Comics</h1>
      </div>

      <HeroList publisher='Marvel Comics' />
    </>
  )
}

export { MarvelPage }
