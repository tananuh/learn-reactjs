import React from 'react';
import {useState} from 'react'
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList =[
        {
            id: 1,
            code: 'eat',
            status: 'new'
        },{
            id: 2,
            code: 'sleep',
            status: 'completed'
        },{
            id: 3,
            code: 'code',
            status: 'new'
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList]
        console.log(todo, idx);

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ?'completed':'new'
        };

        setTodoList(newTodoList);
    }

    return(
        <div>
            <h3>
                Todo List
            </h3>
            <TodoList todoList ={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;