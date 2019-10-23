import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add, sub } from 'reduxs/actions/Counter';

class Counter extends Component {
    constructor() {
    super();
    this.state = {
    };
    }

    render() {
        const { value } = this.props;
        return (
            <div>
                <span>{value}</span>
                <br />
                <button type="button" onClick={this.props.add}>Increase</button>
                <button type="button" onClick={this.props.sub}>Decrease</button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired
};
export default connect(
    (state) => ({
        value: state.changeValue.value
    }),
    { add, sub }
)(Counter);
