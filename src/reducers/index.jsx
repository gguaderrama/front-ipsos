import counterReducer from './counter'
import loggerReducer from './isLogged'
import { IntlReducer as Intl } from 'react-redux-multilingual'
import MenuAdmin from './admin/menu_admin'
import datosGenerales from './budgets/brief_cotizacion'

import { combineReducers} from 'redux'

const allReducers = combineReducers({
    Intl,
    MenuAdmin : MenuAdmin, 
    counter : counterReducer,
    loggerReducer : loggerReducer,
    datosGenerales : datosGenerales 
})

export default allReducers