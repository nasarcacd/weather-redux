import { combineReducers } from 'redux'
import weatherReducer from '../redux/weather/weather.reducer'

const rootReducer = combineReducers({
    weather: weatherReducer
})

export default rootReducer