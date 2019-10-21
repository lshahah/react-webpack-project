// 产生action的函数;
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
export { INCREASE, DECREASE, add, sub };
