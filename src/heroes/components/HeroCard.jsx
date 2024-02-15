import { Link } from "react-router-dom";

export const HeroCard = ({ heroData }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroData;

    return (
        <div className="card">
            <div className="card__contenido">

                <img src={`./heroes/${id}.jpg`} className="card__img" alt={superhero} />

                <div className="card__body">
                    <h4 className="card__title">{superhero}</h4>
                    <div className="card__caja">
                        <p className="card__text">{alter_ego}</p>

                        {
                            (alter_ego !== characters) && (<p>{characters}</p>)
                        }

                        <p className="card__text">
                            <small className="card__text--muted">{first_appearance}</small>
                        </p>
                    </div>

                    <Link to={`/hero/${id}`} className="card__btn ">Más información</Link>

                </div>

            </div>
        </div>
    )
}


