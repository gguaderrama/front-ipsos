import counterReducer from './counter'
import loggerReducer from './isLogged'
import { IntlReducer as Intl } from 'react-redux-multilingual'
import MenuAdmin from './admin/menu_admin'

import { combineReducers} from 'redux'

const allReducers = combineReducers({
    Intl,
    MenuAdmin : MenuAdmin, 
    counter : counterReducer,
    loggerReducer : loggerReducer 
})

export default allReducers