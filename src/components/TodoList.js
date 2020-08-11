import React from 'react';
import {connect} from 'react-redux';
import {removeTodo, changeStatus} from '../store/actionCreator';

const TodoList = props => {
    return (
        <ul style={{listStyle:'none',margin:0,padding:0}}>
        {
            props.todos.map(todo => {
                return (
                    <li key={todo.id}>
                        <input 
                        type="checkbox"
                        checked={todo.status === 'done'}
                        onChange={e => props.changeStatus({
                            id:todo.id,
                            title:todo.title,
                            status:e.target.checked ? 'done':'progress'
                        })}
                        />
                        <span style={{textDecoration:todo.status === 'done'?'line-through':'none'}}>{todo.title}</span>
                        <button onClick={() => props.removeTodo(todo.id)}>Remove</button>
                    </li>
                );
            })
        }
        </ul>
    );
}


const mapStateToProps = state => {
    return {
        todos: state.todoState.todos
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatus: todo => dispatch(changeStatus(todo)),
        removeTodo: id => dispatch(removeTodo(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);