import React from 'react';
import { useDispatch } from 'react-redux';
import { sumAction } from '../store/clickerReducer';


function AddForm() {

    const dispatch = useDispatch();
  
    const submit = event => {
    event.preventDefault();
    const {number} = event.target;
    dispatch(sumAction(number.value));
    number.value = '';
    };

    return (
        <form onSubmit={submit}>
            <input type="number" name="number"/>
            <button>Увеличить</button>
        </form>
    );
}

export default AddForm;