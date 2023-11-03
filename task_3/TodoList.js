import React, { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const remove = id => {
        console.log(id)
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const update = (id, updatedTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const create = newTodo => {
        setTodos([...todos, newTodo])
    }
    console.log(todos)

    const todosList = todos.map(todo => (
        <Todo
            key={todo.id}
            remove={remove}
            toggleComplete={toggleComplete}
            update={update}
            todo={todo}
        />
    ))

    console.log(todos)

    return (
        <div className="TodoList">
            <h1 style={{color:'white'}}>React Todo List</h1>
            <NewTodoForm createTodo={create} />
            <ul>{todosList}</ul>
        </div>
    )

}

export default TodoList