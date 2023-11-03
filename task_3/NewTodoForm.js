import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'


const NewTodoForm = ({ createTodo }) => {
    const [userInput, setUserInput] = useState({})

    const handleChange = e => {
        setUserInput({ [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (userInput.task === '') {
            alert('Please enter the task')
        } else {
            const newTodo = { id: uuid(), task: userInput.task, completed: false }
            createTodo(newTodo)
            setUserInput({ task: '' })
        }
    }


    return (
        <form className='NewTodoForm' onSubmit={handleSubmit}>
            {/* <label>New Todo</label> */}
            <input
                value={userInput.task}
                onChange={handleChange}
                type='text'
                name='task'
                placeholder='Add your text'
                style={{borderRadius:'40px' ,height:'30px',width:'300px',textDecoration:'none'}}
            />
            <button style={{borderRadius:'40px' ,height:'30px',width:'70px',textDecoration:'none'}}>Add</button>
        </form>
    )
}

export default NewTodoForm