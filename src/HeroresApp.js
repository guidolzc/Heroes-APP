import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { autReducer } from './auth/autReducer';

// si esta muestra el user sino esta false 
    const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged : false};
}

export const HeroresApp = () => {

    // user datos que vienen de init, dispacht q actualiza , autReducer funcion y init objeto q entra
    const [user, dispatch] = useReducer(autReducer, {}, init)
    
    useEffect(() => {
       
        localStorage.setItem('user',JSON.stringify(user));
    }, [user])
    

    return (
        <AuthContext.Provider value={{user,dispatch}}>
           <AppRouter/>
        </AuthContext.Provider>
 
    )
}
