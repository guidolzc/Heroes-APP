import React from 'react'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';


import { Navbar } from '../components/ui/NavBar.js/NavBar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashBoardRoutes = () => {
    return (
       //entrada de cada link
        <>
             <Navbar/>
       <div className="container mt-3">
      <Switch>
      <Route exact path="/marvel" component={MarvelScreen}/>
      <Route exact path="/hero/:heroeId" component={HeroScreen}/>
      <Route exact path="/dc" component={DcScreen}/>
      <Route exact path="/search" component={SearchScreen}/>  
      <Redirect to="/marvel"/>
      </Switch>
      </div>
        </>
    )
}
