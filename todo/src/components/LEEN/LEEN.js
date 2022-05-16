import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function TodoForm(props) {

  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    console.log('e.target.value', e.target.value);
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    console.log('item', item);
    const newItem = {};
    setItem(newItem);
  }

  return (

    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupItem">
          <Form.Label>To Do </Form.Label>
          <Form.Control name="text" type="text" placeholder="To Do Item" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formGroupAssigned">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control name="assignee" type="text" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Due Date</Form.Label>
          <Form.Control name="date" type="date" onChange={handleInputChange} />
        </Form.Group>
        {/*         <Form.Group controlId="formBasicRange">
          <Form.Label>Status</Form.Label>
          <Form.Control name="status" type="date" onChange={handleInputChange} /> 
          <Form.Control name="status" size="sm" as="select" onChange={handleInputChange}>
            <option>Completed</option>
            <option>Working on it</option>
          </Form.Control>
        </Form.Group> */}
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control name="difficulty" min="0" max="5" type="range" onChange={handleInputChange} />
        </Form.Group>
        <Button variant="outline-primary" type='submit'>Add</Button>
      </Form>
    </>

  )
}

export default TodoForm;