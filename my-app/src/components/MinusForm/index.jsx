import React from 'react';
import { useDispatch } from 'react-redux';

function MinusForm() {

    const dispatch = useDispatch();
  
    const submit = event => {
    event.preventDefault();
    const {number} = event.target;
    dispatch({type: 'MIN', payload: +number.value});
    number.value = '';
    };

    return (
        <form onSubmit={submit}>
            <input type="number" name="number"/>
            <button>Уменьшить</button>
        </form>
    );
}

export default MinusForm;