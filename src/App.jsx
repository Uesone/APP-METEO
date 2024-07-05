import React, { useState } from 'react'
import Search from './components/Search'
import WeatherInfo from './components/WeatherInfo'
import Forecast from './components/Forecast'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [forecastData, setForecastData] = useState({})
  const [location, setLocation] = useState('')

  const apiKey = '57c749120c303dfeedb6ca768b9795ac'

  const searchLocation = () => {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`

    fetch(geoUrl)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0]

          const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
              setWeatherData(data)
              console.log('Current weather data:', data)
            })

          const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
              setForecastData(data)
              console.log('Forecast data:', data)
            })
        } else {
          window.alert('Città non trovata.')
        }
      })
      .catch(error => {
        console.error('Errore fetching località:', error)
        window.alert('Errore nel riperimento dei dati.')
      })

    setLocation('')
  }

  return (
    <div className="app">
      <Search
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <WeatherInfo data={weatherData} />
      <Forecast data={forecastData} />
    </div>
  )
}

export default App
