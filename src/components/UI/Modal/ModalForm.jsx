import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    btnClass,
    color,
    index,
    value,
    updateToDo,
    disabled
  } = props

  const [modal, setModal] = useState(false)
  const [updateTodo, setUpdateTodo] = useState(value)

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  const checkUpdate = () => {
    if (value !== updateTodo && updateTodo.trim().length !== 0) {
      updateToDo(index, updateTodo)
    }
    else {
      if (updateTodo.trim().length === 0) {
        alert('Shuld not be empty')
        return
      }
      else {
        alert('Nothing changed !!!')
      }
    }

    closeModal()
  }

  return (
    <React.Fragment>
      <Button color={color} disabled={disabled} className={btnClass} onClick={openModal}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={openModal} className={className} >
        <ModalHeader>Update To-Do</ModalHeader>
        <ModalBody>
          <Input type="textarea" onChange={(e) => setUpdateTodo(e.target.value)} value={updateTodo} rows={5} />
        </ModalBody>
        <ModalFooter>
          <Button color={color} onClick={checkUpdate}>Update</Button>{' '}
          <Button color="secondary" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default ModalExample