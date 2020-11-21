import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'

const ToDOList = ({todo, isComplete}) => {
  
  return (
    <ListGroupItem>
      {todo}
      {/* <Button>Edit</Button> */}
      <Button close />
    </ListGroupItem>
  )
}

export default ToDOList
