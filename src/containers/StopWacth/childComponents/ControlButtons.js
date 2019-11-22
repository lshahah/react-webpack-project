import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'tinper-bee';

const ControlButtons = (props) => {
    const { actived, onStart, onPause, onSplit, onReset } = props;
    if (actived) {
        return (
            <div>
                <Button onClick={onSplit}>计次</Button>
                <Button onClick={onPause}>停止</Button>
            </div>
        );
    }
        return (
            <div>
                <Button onClick={onReset}>复位</Button>
                <Button onClick={onStart}>启动</Button>
            </div>
        );
};
ControlButtons.propTypes = {
    actived: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    // 计次
    onSplit: PropTypes.func.isRequired,
    // 复位
    onReset: PropTypes.func.isRequired,
};
export default ControlButtons;
