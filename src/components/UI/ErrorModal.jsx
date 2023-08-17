import React from 'react'

import Card from './Card'
import Button from './Button'

const ErrorModal = (props) => {
  return (
    <div onClick={props.onConfirm}>
    <Card>
        <header style={{textAlign:'center'}}>
            <h2>{props.title}</h2>
        </header>
        <div style={{textAlign: 'center'}}>
            <p>{props.message}</p>
        </div>
        <footer style={{textAlign: 'center'}}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModal
