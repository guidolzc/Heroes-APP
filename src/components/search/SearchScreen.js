import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';

import { useForm } from '../../hooks/useForm';

import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history}) => {


    // paso el heroe desde la location de COMPONENTS
    const location = useLocation();
  // console.log(location.search)

    // Importar QueryString es el q lee y separa los espacio por campos DE LOCATION lo = PARSEA 
    const {q=''}=queryString.parse(location.search);
    //console.log(q)
 
    
    // ACTUALIZA EL VALOR 
    const [formValues,handleInputChange]=useForm({
        // paso paso al Q lo que escribi en SearchText que viene desde value
        searchText: q
    });
  
    // destructuro para pasar q me pasen el valor por VALUE 
    const {searchText}=formValues;


    // BUSCA EL NOMBRE 1 sola vez y no dispare varias veces
   const  heroesFiltered=useMemo (() => getHeroesByName(q),[q]);
  

   // paso a componentes location-PUSH y pongo Q= y el texto q escribi
    const handleSearch = (e) => {
        e.preventDefault();
            // console.log(searchText);
            history.push(`?q=${searchText}`);
        }
    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Find your hero"
                        name="searchText"
                        autoComplete="off"
                        value= {searchText}
                        onChange={handleInputChange}
                        />

                    <button 
                    type="submit"
                    className="btn btn-block btn-outline-primary"
                    >
                        Search...
                    </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                {
                    (q==='')&&
                    <div className="alert alert-info">
                    Search a hero
                
                    </div>
                 }
                    {
                    (q!==''&& heroesFiltered.length ===0)&&

                    <div className="alert alert-danger">
                        There is no a hero with {q}
                
                    </div>
                 }


                    {
                            heroesFiltered.map (hero => (
                                <HeroCard
                                    key ={hero.id}
                                    {...hero}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
