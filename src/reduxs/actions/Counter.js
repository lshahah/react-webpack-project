// 产生action的函数;
import axios from 'axios';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const add = () => (
    {
    type: INCREASE
    }
);
const sub = () => (
    {
        type: DECREASE
    }
);
const getData = () => (
   async (dispatch) => {
       await axios.get('111').then((res) => {
        dispatch({
            type: getData,
            data: res
        });
       });
   }
);
export { INCREASE, DECREASE, add, sub, getData };
