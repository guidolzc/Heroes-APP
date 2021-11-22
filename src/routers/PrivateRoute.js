import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = (

    // aqui creo mi booleano y mi funcion q es el component y con ...rest paso todos mis datos 
{
    isAuthenticated, // true o false que viene desde AppRouter Q PASA el usuario
    component: Component,
    ...rest
}

) => {
    
console.log(rest.location.pathname);

localStorage.setItem('lastPath',rest.location.pathname);

    return (
        <Route  {...rest}
            component={(props)=>(
                // si es autotenticado entoces pasar props sino redireccionar solo login
                (isAuthenticated)
                ?
                (<Component{...props}/>)
                : (<Redirect to="/login"/>)
            )}

        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,

}