import { HeroList } from '../components';

const DcPage = () => {
  return (
    <>

      <div className='header-comics'>
        <img src="/img/icono-dc.png" className="header-comics__logo" alt="Icono marvel" />
        <h1 className="header-comics__titulo">Comics</h1>
      </div>
     

      <HeroList publisher='DC Comics' />
    </>
  )
}

export { DcPage }
