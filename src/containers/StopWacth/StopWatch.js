/* eslint-disable react/jsx-props-no-spreading */
import React, { Component, Suspense } from 'react';
// import { Button } from 'tinper-bee';
// import ControlButtons from './childComponents/ControlButtons';

import MajorClock from './childComponents/MajorClock';
import SplitTimes from './childComponents/SplitTimes';

const ControlButtons = () => { import('./childComponents/ControlButtons'); };
let key = 0;
class StopWatch extends Component {
    constructor() {
        super();
        this.state = {
            actived: false,
            startTime: null,
            currentTime: null,
            splits: []
        };
        this.onSplit = this.onSplit.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onPause = this.onPause.bind(this);
        this.saveSplits = this.saveSplits.bind(this);
    }

    componentDidMount() {
    }

    // 计次数组；
    onSplit() {
        const { splits, currentTime, startTime } = this.state;
        this.setState({
            splits: [...splits, { value: currentTime - startTime, key: key++ }]
        });
    }

    // 停止
    onPause() {
        clearTimeout(this.timer);
        this.setState({
            actived: false
        });
    }

    onStart() {
        this.setState({
            actived: true,
            startTime: new Date(),
            currentTime: new Date(),
        });
        const jishi = () => {
            this.timer = setTimeout(() => {
                this.setState({
                    currentTime: new Date()
                });
                jishi();
            }, 1000 / 60);
        };
        jishi();
    }

    // 复位
    onReset() {
        this.setState({
            startTime: null,
            currentTime: null,
            splits: []
        });
    }

    saveSplits() {
        let dateString = '';
        this.state.splits.forEach((item) => {
            console.log(item.value.toString());
            dateString += `${item.value.toString()} `;
        });
        console.log(dateString);
        localStorage.setItem('splitstime', dateString);
    }

    render() {
        const { actived, currentTime, startTime, splits } = this.state;
        return (
            <>
                <MajorClock {...{ actived, currentTime, startTime, splits }} />
                <Suspense fallback={<div>loading....</div>}>
                <ControlButtons
                    actived={actived}
                    onStart={this.onStart}
                    onPause={this.onPause}
                    onReset={this.onReset}
                    onSplit={this.onSplit}
                />
                </Suspense>
                <SplitTimes splitTimes={splits} />
                {/* <Button onClick={this.saveSplits}>保存</Button> */}
            </>
        );
    }
}
export default StopWatch;
