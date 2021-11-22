import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    // pasa el dispatch y el useContext lo actualiza a mi AuthContetx q es un espacio de guardado
    const {dispatch} = useContext(AuthContext)
    
    
    const handleLogin = () => {

        // si no a redireccionado a cualquier direccion , entrara a '/' 
        const lastPath = localStorage.getItem('lastPath')|| '/';


    //   history.push('/'); entra a la pagina
    //   history.replace('/'); // entra pero no vuelve a entrar al retroceder

        // entro a TYPE y pongo mi datos al poner guido entra un nombre y se pondra solo en true
        dispatch({
            type: types.login,
            payload: {name: 'Guido'}
        })
       history.replace(lastPath);
    }


    return (
        <div className="container mt-5">
         

            <h1>Login</h1>
            <hr/>
            <button className="btn btn-primary"
            onClick={handleLogin}>
            
                Login
            </button>


        </div>
    )
}
