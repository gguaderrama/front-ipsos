    
const initialState = {
    datos_generales : '',
}

const datosGenerales = (state = initialState, action) => {
    switch (action.type){
        case "DATOS_GENERALES":
        return {
            ...state,
            datos_generales: action.value
        }
 
            default :
            return state  
    }

}

export default datosGenerales