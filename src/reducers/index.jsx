import counterReducer from './counter'
import loggerReducer from './isLogged'
import { IntlReducer as Intl } from 'react-redux-multilingual'


import { combineReducers} from 'redux'

const allReducers = combineReducers({
    Intl,
    counter : counterReducer,
    loggerReducer : loggerReducer 
})

export default allReducers