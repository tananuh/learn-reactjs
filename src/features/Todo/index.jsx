import React from 'react';
import {useState} from 'react'
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import {useSelector } from 'react-redux';
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

    const user = useSelector(state => state.user);

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');
    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList]
        console.log(todo, idx);

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ?'completed':'new'
        };

        setTodoList(newTodoList);
    }

    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);


    if(user!=="") {
        return(
            <div>
                <h3>
                    Todo List
                </h3>
                <TodoList todoList ={renderTodoList} onTodoClick={handleTodoClick} />
                <div className="actions">
                    <button onClick={handleShowAllClick}>Show All</button>
                    <button onClick={handleShowCompletedClick}>Show Completed</button>
                    <button onClick={handleShowNewClick}>Show New</button>
                </div>
            </div>
        );
    }
    return(
        <div>
            <span>
                You must login to see the Todo List
            </span>
        </div>
    );
}

export default TodoFeature;