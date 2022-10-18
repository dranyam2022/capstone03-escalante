import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function CourseCard({ course }) {
  // Destructuring the props
  const { name, description, price } = course

  // Using the state
  // Initialize a 'count' state with a value of zero (0)
  const [count, setCount] = useState(0)
  const [slot, setSlot] = useState(15)
  const [isOpen, setOpen] = useState(true)

  function enroll() {

    if (slot !== 0) {
      setCount(count + 1)
      setSlot(slot - 1)
    }
    if (slot === 0) {
      alert("Slots are already full.")
    }

  }
  //effects is react is just like side effects that allows a function or condition runs when something happens to the component
  useEffect(() => {
    if (slot === 0) {
      setOpen(false)
    }
  }, [slot])

  return (
    <Card style={{ width: '100%' }} >
      <Card.Body className="cardCourse">
        <Card.Title><h2>{name}</h2></Card.Title>
        <Card.Text>
          <h5>Description:</h5>
          {description}
        </Card.Text>
        <Card.Text>
          <h5>Price:</h5>
          Php {price}
        </Card.Text>
        <Card.Text>Enrolless: {count}</Card.Text>
        <Card.Text>Available slots: {slot}</Card.Text>
        <Card.Text>Is Open: {isOpen ? 'Yes' : 'No'}</Card.Text>
        <Button variant="primary" onClick={enroll}>Enroll Now!</Button>
      </Card.Body>
    </Card>
  );
}

// Prop Types can be used to validate the data coming from the props. You can define each property of the prop and assign specific validation for each of them
CourseCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}