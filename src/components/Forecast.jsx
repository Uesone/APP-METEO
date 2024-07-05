import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Forecast({ data }) {
  const getWeatherIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`


  const getDailyForecasts = (list) => {
    const dailyForecasts = [];
    const dateTracker = new Set();

    for (const forecast of list) {
      const date = new Date(forecast.dt_txt);
      const dateString = date.toISOString().split('T')[0]; 

      if (!dateTracker.has(dateString)) {
        dailyForecasts.push(forecast);
        dateTracker.add(dateString);
      }

      if (dailyForecasts.length >= 5) break;
    }

    return dailyForecasts;
  };

  const dailyForecasts = data.list ? getDailyForecasts(data.list) : [];

  return (
    <Container>
      {dailyForecasts.length > 0 && (
        <>
          <h2 className="text-center mt-4">Prossimi Giorni</h2>
          <Row className="justify-content-center">
            {dailyForecasts.map((forecast, index) => (
              <Col md={2} key={index} className="mb-4">
                <Card className="text-center">
                  <Card.Body>
                    <Card.Text>{new Date(forecast.dt_txt).toLocaleDateString()}</Card.Text>
                    <img src={getWeatherIconUrl(forecast.weather[0].icon)} alt="Weather icon" />
                    <Card.Text>{forecast.weather[0].main}</Card.Text>
                    <Card.Text>{forecast.main.temp.toFixed()}°C</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  )
}

export default Forecast
