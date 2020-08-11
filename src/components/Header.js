import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../store/actionCreator';

const Header = props => {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            // props.addTodo(e.target.inp.value);
            // e.target.inp.value = '';
            props.addTodo(props.inp);
            props.changeInput('');
        }}>
            <input 
            type="text" 
            name="inp" 
            value={props.inp}
            onChange={e => props.changeInput(e.target.value)}
            />
            <input type="submit" value="Add"/>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        inp: state.inputState.inputHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: title => dispatch(addTodo(title)),
        changeInput: text => dispatch({
            type:'[ToDoHeader] change input',
            payload:{
                inputHeader:text
            }
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);