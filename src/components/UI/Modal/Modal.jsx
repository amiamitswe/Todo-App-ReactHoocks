import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const MyModal = (props) => {
  const {
    buttonLabel,
    className,
    btnClass,
    color,
    clickYes,
  } = props

  const [modal, setModal] = useState(false)

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const confrimActionHandler = () => {
    clickYes()
    closeModal()
  }

  return (
    <React.Fragment>
      <Button color={color} className={btnClass} onClick={openModal}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={openModal} className={className} >
        <ModalHeader style={{ color: 'red' }}>Are You Sure ???</ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <Button color={color} onClick={confrimActionHandler}>Yes</Button>{' '}
          <Button color="secondary" onClick={closeModal}>No</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default MyModal