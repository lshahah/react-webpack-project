import { INCREASE, DECREASE } from 'reduxs/actions/Counter';


const changeValue = (state = { value: 1 }, action) => {
    switch (action.type) {
    case INCREASE:
       return (
           { ...state, value: state.value + 1 }
       );
       case DECREASE:
           return (
               { ...state, value: state.value - 1 }
           );
           default:
               return (
                   { ...state }
               );
    }
};
export default changeValue;
