

import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => {

    // FIND SI APENAS ENCUENTRAS 1 ESO SERIA TODO
    return heroes.find( hero => hero.id === id );

}
