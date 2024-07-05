import React from 'react'
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'

function Search({ location, setLocation, searchLocation }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="d-flex" onSubmit={e => e.preventDefault()}>
            <FormControl
              type="text"
              placeholder="Enter Location"
              className="mr-sm-2"
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
            />
            <Button variant="primary" onClick={() => searchLocation({ key: 'Enter' })}>Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
