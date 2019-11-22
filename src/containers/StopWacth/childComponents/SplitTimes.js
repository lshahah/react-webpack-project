import React from 'react';
import PropTypes from 'prop-types';
import MajorClock from './MajorClock';


const SplitTimes = ({ splitTimes = [] }) => splitTimes.map((item) => (
           <MajorClock showTime={item.value} key={item.key} />
        ));

SplitTimes.propTypes = {
    splitTimes: PropTypes.array.isRequired
};
export default SplitTimes;
