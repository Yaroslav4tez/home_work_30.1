import { createSlice } from "@reduxjs/toolkit";
import setIsLoading from './loadingReducer';

/*
const listSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        setList: (_, action) => action.payload,
        addTodo: (prevState, action) => [...prevState, action.payload],
        deleteTodo: (prevState, action) => prevState.filter(todoItem => todoItem._id !== action.payload)
    }
});

export const { setList, addTodo, deleteTodo } = listSlice.actions;

export default listSlice.reducer;
*/
export const setList = (payload) => ({type: 'SET_LIST', payload});
//export const addTodo = (payload) => ({type: 'ADD_TODO', payload});
export const deleteTodo = (payload) => ({type: 'DELETE_TODO', payload});

export default (prevState = [], action) => {
    switch (action.type) {
        case 'SET_LIST':
            return action.payload;
        case 'ADD_TODO_SUCCESS':
            return [...prevState, action.payload];
        case 'DELETE_TODO':
            return prevState.filter(todoItem => todoItem._id !== action.payload);
        default:
            return prevState;
    }
}

export const addTodoPending = (payload) => ({type: 'ADD_TODO', payload});
export const addTodoSuccess = (payload) => ({type: 'ADD_TODO_SUCCESS', payload});
export const addTodoFailed = (payload) => ({type: 'ADD_TODO_FAILED', payload});

export const addTodo = () => {
    return (dispatch, getState) => {
        dispatch(setIsLoading(true));
        dispatch(addTodoPending());
        fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getState().newTask)
        })
        .then(resp => resp.json())
        .then(task => {
            dispatch(addTodoSuccess(task)); 
            dispatch(setNewTaskText(''));
            dispatch(setIsLoading(false));
        }) 
        .catch(error =>  {
            dispatch(addTodoFailed(error));
        })  
    } 
}

/*
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
*/