import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

function WeatherInfo({ data }) {
  const getWeatherIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <Container>
      {data.name && (
        <>
          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                  </Card.Text>
                  <Card.Text>
                    {data.weather && data.weather[0] ? (
                      <>
                        <p>{data.weather[0].main}</p>
                        <img src={getWeatherIconUrl(data.weather[0].icon)} alt="Weather icon" />
                      </>
                    ) : null}
                  </Card.Text>
                  <Row>
                    <Col>
                      <Card.Text>
                        {data.main ? <p className='font-weight-bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                        Percepiti
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>
                        {data.main ? <p className='font-weight-bold'>{data.main.humidity}%</p> : null}
                        Umidità
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>
                        {data.wind ? <p className='font-weight-bold'>{data.wind.speed.toFixed()} m/s</p> : null}
                        Vento
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default WeatherInfo
