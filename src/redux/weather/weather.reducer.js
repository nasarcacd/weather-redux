import WeatherTypes from './weather.types'

const INITIAL_STATE = [];

const weatherReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case WeatherTypes.SEARCH_CITY:
            return [...state, action.data]
        default:
            return state
    }
}

export default weatherReducer