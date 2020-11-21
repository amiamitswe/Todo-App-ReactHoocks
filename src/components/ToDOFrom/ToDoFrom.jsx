import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import classes from './ToDoFrom.module.css'

const ToDoFrom = ({ newToDoValue }) => {

  const [todoValue, setTodoValue] = useState('')


  const addToDoItem = (e) => {
    e.preventDefault()
    if (!todoValue) return
    newToDoValue(todoValue)
    setTodoValue('')
  }

  return (
    <React.Fragment>
      <Form className='d-flex mb-4' onSubmit={addToDoItem}>
        <FormGroup className='w-100 mb-0'>
          <Label for="addToDo">Add To-Do Item's</Label>
          <Input
            type="text"

            className={classes.Form}
            placeholder="with a placeholder"
            onChange={(e) => setTodoValue(e.target.value)}
            value={todoValue}
          />
        </FormGroup>
        <Button
          color="primary"
          className={['align-self-end', 'ml-1', classes.Button].join(' ')}>Save</Button>
      </Form>
    </React.Fragment>
  )
}

export default ToDoFrom