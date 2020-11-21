import React, { useState } from 'react'
import ToDoForm from '../ToDOFrom/ToDoFrom'
import ToDoList from '../ToDOList/ToDOList'
import { ListGroup } from 'reactstrap'

const ToDo = () => {

  const [toDoList, setToDoList] = useState([
    {
      todo: 'React tutorial',
      isComplete: false
    },
    {
      todo: 'Redux tutorial',
      isComplete: false
    },
    {
      todo: 'JavaScript tutorial',
      isComplete: false
    }
  ])

  const newToDoValue = (todo) => {
    const myTodoList = [...toDoList, {todo}]
    setToDoList(myTodoList)
    console.log('new todo is added')
  }


  return (
    <React.Fragment>
      <ToDoForm
        newToDoValue={newToDoValue}
      />
      <ListGroup>
        {toDoList.map((todo, index) => (
          <ToDoList
            key={index}
            todo={todo.todo}
            isComplete={todo.isComplete}
          />
        ))}
      </ListGroup>
    </React.Fragment>
  )
}

export default ToDo
