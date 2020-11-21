import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'
import { Edit, TickMark, Delete } from '../UI/ICON/Icon'
import Modal from '../UI/Modal/Modal'

import classes from './ToDOList.module.css'

const ToDOList = ({ todo, isComplete, todoComplete, deleteToDo }) => {

  return (
    <ListGroupItem className='d-flex align-items-center mb-1 p-3'>
      <div
        className="flex-grow-1"
        style={{ textDecoration: isComplete ? 'line-through' : 'unset' }}>
        {todo}
      </div>
      <div className='d-flex align-self-start'>
        <Button
          className={classes.Button}
          color='info'
          disabled={isComplete}>
          <Edit />
        </Button>
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
