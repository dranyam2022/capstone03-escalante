import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  // Destructuring the props
  const { name, description, price, _id } = course

  // Using the state
  // Initialize a 'count' state with a value of zero (0)
  const [count, setCount] = useState(0)
  const [slot, setSlot] = useState(15)
  const [isOpen, setIsOpen] = useState(true)

  // function enroll(){

  //   if(slot !== 0){
  //     setCount(count + 1)
  //     setSlot(slot - 1)
  //   }
  //   if(slot === 0){
  //     alert("Slots are already full.")
  //   }

  // }

  // Effects in React is just like side effects/effects in real life, where everytime something happens within the component, a function or condition runs.
  // You may also listen or watch a specific state for changes instead of watching/listening to the whole component
  // useEffect(()=> {
  //     if(slot === 0){
  //       setIsOpen(false)
  //     }
  // }, [slot])

  return (
    <Card style={{ width: '100%' }} >
      <Card.Body className="cardCourse">
        <Card.Title>{name}</Card.Title>

        <Card.Subtitle>Description:</Card.Subtitle>
        <Card.Text>{description}</Card.Text>


        <Card.Subtitle>Price:</Card.Subtitle>
        <Card.Text>Php {price}</Card.Text>

        <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
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