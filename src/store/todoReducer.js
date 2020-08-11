import * as Types from './actionTypes';

const init = {
    todos:[]
}

export default (state = init, {type,payload}) => {
    switch(type){
        case Types.ADD_TODO: return addTodo(state,payload);
        case Types.RM_TODO: return removeTodo(state,payload);
        case Types.UPDATE_TODO: return updateTodo(state,payload);
        default: return state;
    }
} 

function addTodo(state,{title}){
    const todo = {
        id:uuidv4(),
        title,
        status:'progress'
    }
    return {...state, todos:[...state.todos,todo]};
}

function removeTodo(state,{id}){
    const tmp = [...state.todos];
    const index = tmp.findIndex(todo => todo.id === id);
    tmp.splice(index,1);
    return {...state,todos:[...tmp]};
}

function updateTodo(state,{todo}){
    const tmp = [...state.todos];
    const index = tmp.findIndex(t => t.id === todo.id);
    tmp[index] = todo;
    return {...state,todos:[...tmp]};
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
