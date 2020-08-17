import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchAsc } from './redux/weather/weather.actions'
import './App.css'

const App = () => {
  const results = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  const searchWeather = (e) => {
    e.preventDefault()
    console.log("searchWeather", e.target.search.value)
    dispatch(searchAsc(e.target.search.value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => searchWeather(e)}>
            <input type="text" name="search" />
            <button>Search</button>
          </form>
          <table>
            <tbody>
              <tr>
                <td>City</td>
                <td>Thermal sensation</td>
                <td>Wet</td>
                <td>Pressure</td>
                <td>temperature</td>
                <td>MAX</td>
                <td>MIN</td>
              </tr>
              {
                results.map((el, index) => {
                  return(
                    <tr key={index}>
                      <td>{el.name}</td>
                      <td>{el.main.feels_like}</td>
                      <td>{el.main.humidity}</td>
                      <td>{el.main.pressure}</td>
                      <td>{el.main.temp}</td>
                      <td>{el.main.temp_max}</td>
                      <td>{el.main.temp_min}</td>
                    </tr>
                  ) 
                })
              }
            </tbody>
          </table>
        </header>
    </div>
  );
}

export default App
