import { Link } from "react-router-dom";

export const HeroCard = ({ heroData }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroData;

    return (
        <div className="col  animate__animated animate__fadeIn animate__faster">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`/heroes/${ id }.jpg`}  className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            {
                                ( alter_ego !== characters ) && ( <p>{ characters }</p> )
                            }

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`} className="btn btn-outline-info ">Más información</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


