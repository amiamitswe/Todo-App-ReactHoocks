import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'
import { Edit, TickMark, Delete } from '../UI/ICON/Icon'
import Modal from '../UI/Modal/Modal'
import ModalForm from '../UI/Modal/ModalForm'
import classes from './ToDOList.module.css'

const ToDOList = ({ index,todo, isComplete, todoComplete, deleteToDo, updateToDo }) => {

  return (
    <ListGroupItem className='d-flex align-items-center mb-1 p-3'>
      <div
        className="flex-grow-1"
        style={{ textDecoration: isComplete ? 'line-through' : 'unset' }}>
        {todo}
      </div>
      <div className='d-flex align-self-start'>
        <ModalForm
          buttonLabel={<Edit />}
          btnClass={classes.Button}
          color='info'
          disabled={isComplete}
          value={todo}
          index={index}
          updateToDo={updateToDo}
        />

        <Button
          className={classes.Button}
          color='success'
          disabled={isComplete}
          onClick={todoComplete}
        >
          <TickMark />
        </Button>

        <Modal
          buttonLabel={<Delete />}
          btnClass={classes.Button}
          color='danger'
          clickYes={deleteToDo}
        >
          {todo}
        </Modal>
      </div>
    </ListGroupItem>
  )
}

export default ToDOList
