import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from "./DashBoardRoutes";

import { PrivateRoute } from './PrivateRoute';


import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';



export const AppRouter = ()=> {

  // paso mi user boolean para para autenticar si es true o false si

  const {user}= useContext(AuthContext);

  console.log(user);
  return (

    <Router>
    <div>
      
      {/* // entrada de login */}
 
      <Switch>
      <PublicRoute
      exact path="/login" 
      component={LoginScreen}
      isAuthenticated= {user.logged}
      />
      
      {/* AQUI PASO MI USER y no entre directo a http://localhost:3000/MARVEL directamente escribiendolo */}
      <PrivateRoute  
      path="/" 
      component={DashBoardRoutes}
      isAuthenticated= {user.logged}

      />
      </Switch>
    </div>
  </Router>
  );
}