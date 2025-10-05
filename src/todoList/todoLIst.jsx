import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "";
import { addTodo, deleteTodo, setList } from "module";
import { setNewTaskText } from "";

export default () => {
    const todoList = useSelector(state => state.list);
    const dispatch = useDispatch();

    const newTask = useSelector(state => state.list);
    const isLoading = useSelector(state => state.isLoading);

    const setTaskText = (e) => {
        dispatch(setNewTaskText(e.target.value))
    }

    useEffect(() => {
        dispatch(setIsLoading(true));
        fetch('api/todo-list')
            .then(resp => resp.json())
            .then(list => {
                const action = setList(list);
                dispatch(action);
                dispatch(setIsLoading(false))
            });
    }, []);

    const addTask = () => {
        dispatch(setIsLoading(true));
        fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(resp => resp.json())
        .then(task => {
            addAction = addTodo(task);
            dispatch(addAction);
            const clearAction = setNewTaskText('');
            dispatch(clearAction);
            dispatch(setIsLoading(false));
        });
    }
}