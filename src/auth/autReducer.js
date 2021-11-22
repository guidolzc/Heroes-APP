
import { types } from '../types/types';

// const state = {
//     name:'fernando',
//     logged:true
// }



export const autReducer = (state ={},action) => {
 switch (action.type) {
     
     case types.login:

     // si es true mando todo loq sea de mi usuario
         return{
             ...action.payload,
             logged:true
         }
         case types.logout:
             return{
                 logged:false
             }
        
    
     default:
        return state;
 }
}
