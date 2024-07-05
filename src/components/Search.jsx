import React from 'react'
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'

function Search({ location, setLocation, searchLocation }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchLocation()
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="d-flex" onSubmit={e => e.preventDefault()}>
            <FormControl
              type="text"
              placeholder="Scrivi la città..."
              className="mr-sm-2"
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button variant="primary" onClick={searchLocation}>Cerca</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
