import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';


export const HeroList = ( { publisher } ) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="hero hero-grid">
            { heroes.map( hero => <HeroCard key = { hero.id } heroData = { hero }/> )}
        </div>
    )
}


