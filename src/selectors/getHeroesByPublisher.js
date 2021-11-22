import { heroes } from "../data/heroes";



export const getHeroesByPublisher = (publisher) => {

    // cualquier cosa q no sea DC COMIC Y MARVEL COMIC deberia lanzar 1 ERROR trae HEROES = PUBLISHER
   const validaPublisher = ['DC Comics','Marvel Comics'];

   // SI NO LO ENCUENTRA  
   if (!validaPublisher.includes(publisher)) {
       throw new Error(`Publisher"${publisher}" no es correcto`);


   }

   // RETORNAREMOS SIEMPRE CUANDO SEA IGUAL AL PUBLISHER DENTRO DE HERO

   return heroes.filter(hero => hero.publisher === publisher);



}
