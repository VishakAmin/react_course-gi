import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'


import classes from "./AddUsers.module.css"

const AddUsers = (props) => {

    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter"
            })
            return
        }
        if (+age < 1) {
            setError({
                title: "Invalid age",
                message: "Please Enter valid age"
            })
            return
        }


        props.onAddUser(username, age)

        setAge("")
        setUsername("")
    }

    const errorhandler = () => {
        setError(null)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }




    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onClose={errorhandler} />}
            <Card className={classes.input} >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input value={username} type="text" id="username" placeholder="Enter Username" onChange={handleUsernameChange} />
                    <label htmlFor="age">Age</label>
                    <input value={age} type="number" id="age" placeholder="Enter Age" onChange={handleAgeChange} />
                    <Button name="Add User" type="submit" onClick={props.onClose} />
                    {/* <button type="submit">Submit</button> */}
                </form>
            </Card>
        </React.Fragment>
    )
}

export default AddUsers
