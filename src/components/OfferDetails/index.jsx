import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getDetails } from '../../actions';

// import './styles.css'

class Offer extends Component {
    componentDidMount() {
        const { getDetails, match } = this.props;
        getDetails(match.params.id);
    }

    render() {
        const { details } = this.props;

        return (
            <section>
                <h1>
                    {details.companyName}
                </h1>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    details: state.dates.details
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDetails,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
