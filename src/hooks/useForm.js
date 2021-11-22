import { useState } from 'react'

// para  escribi en el formulario
export const useForm = (initialState={}) => {
    // estado d mi formulario //guarda y extrae datos y los actualiza lo escritos
    const [values, setValues] = useState(initialState)
    

    // mando mi inicial state mas arriba como VACIO en corchertes initialstate={VACIO}
    const reset = () => {
        setValues(initialState)
    }

    // se comunica con el formulario cambia el formulario
    const handleInputChangee = ({target}) => {
        
        setValues({
        ...values,
     
        [target.name]:target.value
        
    })
    
}
    
    return [values,handleInputChangee, reset]
   
}

