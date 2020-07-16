import {createStore} from 'redux';

const initialState ={
    currentValue:0,

}

export const INCREMENT = 'INCREMENT ';
export const DECREMENT = 'DECREMENT';


function counter(state = initialState, action){
    return state;

}

export default createStore(counter);
