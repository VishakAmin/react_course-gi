import React from 'react'
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{text:string; onRemove:()=>void}> = (props) => {

    
    return (
        <li className={classes.item} onClick={props.onRemove}>
            {props.text}
        </li>
    )
}

export default TodoItem
