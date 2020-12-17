import React from 'react';
import Todo from './Todo'

export default function List(props) {
    const mappedTodos = props.currentTodos.map((el, ind) => {
        return <Todo word={el} key={ind} />
    });
    return (<>{mappedTodos}</>)
}