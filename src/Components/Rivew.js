import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function Rivew({ comments }) {
  console.log(comments)
  return (
    <div>
      <Carousel variant="dark">
        {comments.map((rivew) => (
          <Carousel.Item>
            <Card style={{ width: '42rem' }}>
              <Card.Body   >
                <Card.Title>Name: {rivew.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Rating: {rivew.rating}</Card.Subtitle>
                <Card.Text>
                  Comment: <br/>&nbsp; {rivew.comments}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Date: {rivew.date}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Rivew