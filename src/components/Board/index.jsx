import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
import { getApi } from '../../actions';

class Board extends Component {
    componentDidMount() {
        const getApi = this.props.getApi;

        getApi()
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dates: state.dates.dates
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getApi
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Board);
