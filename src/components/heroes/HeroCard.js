import React from 'react'
import { Link } from 'react-router-dom';

// me pasan los Heroes desde HEROLIST y armo mi tabla en el Return con sus imagenes
export const HeroCard = ({ 
    id,
superhero, 
alter_ego,
first_appearance,
characters,

}) => {
    return (
        <div className="card ms-3" style={{maxWidth:540}}>
            <div className="row no-gutters">
                <div className="col-md-4">

                    {/* BUSCO POR {id} aqui pide la imagen segun su ID = es igual AL NOMBRE DE DATA/HEROES Y LA IMAGEN */}
                     <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt ={superhero}/>
                
                </div>
                     <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>

                            {
                            // si el alTer es diferente a los caracter ENTOCES mostrar caracter
                                (alter_ego !== characters) &&
                            <p className="card-text">{characters}</p>
                            }

                            <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>

                            </p>
                            {/*le paso el MI ID que quiero que navegue el HERO*/}
                             <Link to={`./hero/${id}`}>
                                 Mas...
                             </Link>   
                         </div>
                    </div>
            </div>
            
        </div>
    )
}
