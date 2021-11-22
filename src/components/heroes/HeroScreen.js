import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';



// pongo History del component 
export const HeroScreen = ({history}) => {

    // buscamos dentro de react router dom PARAMS QUE ESTA en component HeroScreen


    const {heroeId} = useParams();



    // si el id no cambia no volver a mostrar
    const hero = useMemo(() =>  getHeroById(heroeId) ,[heroeId]);
    //const hero = getHeroById(heroeId);

    //console.log(hero);


    // si no esta el heroe redirecionar a inicio
    if ( !hero ) {
        return <Redirect to="/" />;
    }


    // regreso atras en la pagina con el boton
    const handleReturn =() => {
         if(history.length <=2) {

            // avanza a la pagina
            history.push('/');


            // goBack vuelve hacia atras es un COMPONENTE dentro del History
         }else { history.goBack();}
         

    }
    // destructurar el Hero para mostrar sus datos o de este objeto 
    // si o si va sino dara error sino tenemos un IF Y ELSE de redireccion Redirect
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

     // pasamos el Heroid  mostrando la imagen cuadros y datos de 1 solo hero
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                 src={`../assets/heroes/${heroeId}.jpg`}
                 alt={superhero}
                 className="img-thumbnail animate__animated  animate__fadeInDown"
                
                />


            </div>
            <div className=" col-8">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>

            </ul>

            <h5>Characters</h5>
            <p>{characters}</p>
            <button
                className="btn btn-outline-info"
                onClick={handleReturn}
            >
                Return
            </button>
            </div>
        </div>
    )
}
