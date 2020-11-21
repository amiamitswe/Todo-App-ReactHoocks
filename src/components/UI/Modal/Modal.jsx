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

  const toggle = () => setModal(!modal)
  const confrimDeletehandler = () => {
    clickYes()
    setModal(!modal)
  }

  return (
    <React.Fragment>
      <Button color={color} className={btnClass} onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} >
        <ModalHeader style={{ color: 'red' }}>Are You Sure ???</ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <Button color={color} onClick={confrimDeletehandler}>Yes</Button>{' '}
          <Button color="secondary" onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default MyModal