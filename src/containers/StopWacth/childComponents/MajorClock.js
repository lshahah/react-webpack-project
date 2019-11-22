// 用于显示时间的组件；
import React from 'react';
// import moment from 'moment';
import PropTypes from 'prop-types';

const MajorClock = ({ showTime = 0 }) => (
        <h2>{showTime / 1000}</h2>
    );

MajorClock.propTypes = {
 showTime: PropTypes.number.isRequired,
};

export default MajorClock;
