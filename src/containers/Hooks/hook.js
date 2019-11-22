import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

React.lazy();

function Example() {
    // useState 只有唯一参数为state的初始值，返回一个数组，数组[0]项为状态值，第[1]项为改变状态值的函数；
    const initData = { count: 1 };
    const [count, setCount] = useState(0);
    const [isshow, setShow] = useState(true);
    const [data, changeData] = useState({ name: 'ls', age: '18' });
    const [width, setWidth] = useState(window.innerWidth);
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return { count: state.count + 1 };
            case 'jian':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    };
    const [state, dispatch] = useReducer(reducer, initData);
    // useEffect代替生命周期函数处理副作用；
    // 在副作用函数中返回一个函数用于解绑副作用；
    // 传递第二个参数，使副作用在变量改变时才会重现调用;
    const resizeHandle = () => {
        setWidth(window.innerWidth);
    };
    const getData = () => {
        axios.get('').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };
    const lazy = () => {
        setCount((counts) => counts + 8);
    };
    useEffect(() => {
        // set数据结构：
        const set = new Set();
        [1, 2, 3, 3, 4, 5, 1].map((item) => set.add(item));
        console.log(set);

        window.addEventListener('resize', resizeHandle);
        return () => {
            window.removeEventListener('resize', resizeHandle);
        };
    });
    useEffect(() => {
        getData();
        return () => {
            getData();
        };
    });
    const lls = () => {
        console.log('111');
    };
    return (
        <div>
            {isshow ? <p>you click {count} times</p> : null}
            <h2>{width}</h2>
            <h2>count:{state.count}</h2>
            <button onClick={() => { dispatch({ type: 'add' }); }} type="button">+</button>
            <button onClick={() => { setCount(count + 2); }} type="button">点击它！</button>
            <button onClick={() => { setShow(!isshow); }} type="button">{isshow ? '隐藏' : '显示'}</button>
            <button onClick={() => { changeData({ ...data, name: data.name + 2 }); }} type="button">111</button>
            <button onClick={lazy} type="button">lazy</button>
            <button onClick={() => { lls(); }} type="button">console</button>
        </div>
    );
}
export default Example;
