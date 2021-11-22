import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

     //const heroes = getHeroesByPublisher (publisher)

     // uso Memo por q quiero que cambie cuando el publisher cambie
    const heroes= useMemo(() => getHeroesByPublisher (publisher), [publisher]);
     
    return (
        <div className = "card-columns animate__animated animate__fadeIn" >    
           { heroes.map(hero => (

                // mando al HEROCARD una copia de mi Hero destructurado osea dentro de el
               <HeroCard
                key={hero.id}
                   {...hero} 
                    />
            
           ))
            }
            
        </div>
    )
}
