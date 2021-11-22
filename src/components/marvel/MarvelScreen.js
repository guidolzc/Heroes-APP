import React from 'react'
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    return (
        <div>
        <h1>hola MarvelScreen</h1>
        <hr/>

        {/* // llamo Marvel desde GetHeroesByPublisher entro al publisher que tiene 2 opciones */}
        <HeroList publisher="Marvel Comics"/> 

    </div>
    )
}
