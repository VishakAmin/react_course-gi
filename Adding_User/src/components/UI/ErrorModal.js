import ReactDom from 'react-dom';
import React from 'react'

import Button from './Button'
import Card from './Card'

import classes from "./ErrorModal.module.css"


const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>

}


const ModalOverlay = (props) => {
    return (
                    <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>
                            {props.title}
                        </h2>
                    </header >
                    <div className={classes.content}>
                        <p>
                            {props.message}
                        </p>
                    </div>
                    <footer className={classes.actions}>
                        <Button name="Close" onClick={props.onClose}/>
                    </footer>
                </Card>
    
    )
}

const ErrorModal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<BackDrop onClick={props.onClose}/>, document.getElementById('backdrop-root'))}      
            {ReactDom.createPortal(<ModalOverlay  title ={props.title} message={props.message} onClose={props.onClose}/>, document.getElementById('modal-root'))}      
        </>

    )
}

export default ErrorModal

