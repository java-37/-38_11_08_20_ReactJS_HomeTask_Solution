import * as Types from './actionTypes';

export const addTodo = title =>{
    return {
        type:Types.ADD_TODO,
        payload:{
            title
        }
    }
}

export const removeTodo = id => {
    return {
        type:Types.RM_TODO,
        payload:{
            id
        }
    }
}

export const changeStatus = ({id,title,status}) => {
    return {
        type:Types.UPDATE_TODO,
        payload: {
            todo: {
                id,
                title,
                status
            }
        }
    }
}