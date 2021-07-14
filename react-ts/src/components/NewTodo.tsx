import React,{useRef} from 'react'
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent ) => {
        event.preventDefault()
        const inputValue = inputRef.current!.value    
        
        if(inputValue?.trim().length===0){
            return
        }

        props.onAddTodo(inputValue)
    }


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text"> Todo Text</label>
            <input type="text" ref={inputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
