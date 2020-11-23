import React, { useState } from 'react'
import { ListGroup } from 'reactstrap'
import ToDoForm from '../ToDOFrom/ToDoFrom'
import ToDoList from '../ToDOList/ToDOList'
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

  const newToDoValueHandler = (todo) => {
    const myTodoList = [...toDoList, {todo}]
    setToDoList(myTodoList)
    console.log('new todo is added')
  }

  const todoCompleteHandler = index => {
    const myTodoList = [...toDoList]
    myTodoList[index].isComplete = true
    setToDoList(myTodoList)
  }

  const deleteToDoHandler = index => {
    const myTodoList = [...toDoList]
    myTodoList.splice(index, 1)
    setToDoList(myTodoList)
  }

  const updateToDo = (index, updateTodo) => {
    const myTodoList = [...toDoList]
    myTodoList[index].todo = updateTodo
    setToDoList(myTodoList)

    console.log('Update Success');
  }


  return (
    <React.Fragment>
      <ToDoForm
        newToDoValue={newToDoValueHandler}
      />
      <ListGroup>
        {toDoList.map((todo, index) => (
          <ToDoList
            key={index}
            index={index}
            todo={todo.todo}
            isComplete={todo.isComplete}
            todoComplete={() => todoCompleteHandler(index)}
            deleteToDo = {() => deleteToDoHandler(index)}
            updateToDo={updateToDo}
          />
        ))}
      </ListGroup>
    </React.Fragment>
  )
}

export default ToDo
