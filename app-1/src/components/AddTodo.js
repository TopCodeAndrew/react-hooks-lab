// AddTodo.js will be responsible for rendering the necessary input and button to make this interface work.
import React, { useState } from 'react';

const AddTodo = (props) => {

    const [userInput, updateInput] = useState('')

    function handleAddTodo(e) {
        e.preventDefault()
        props.updateTodos(userInput)
        updateInput('')
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input value={userInput} onChange={(e) => updateInput(e.target.value)} />
            <button> Add to list</button>
        </form>
    )
}

export default AddTodo
