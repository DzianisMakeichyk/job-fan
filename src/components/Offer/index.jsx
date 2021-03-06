import React, { Component } from 'react';
import { Card, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getApi, stateDetails } from '../../actions';
import update from 'react-addons-update';
import store from '../../store'

import './styles.css'

class Offer extends Component {
    constructor(props) {
        super(props);
    }

    onEnterMarker = () => {
        this.newMarkerInfo();
    };

    onLeaveMarker = () => {
        this.newMarkerInfo();
    };

    newMarkerInfo = () => {
        const markerInfo = this.props.offer;
        const newMarkerInfo = update(markerInfo, {isHover: {$apply: () => { return markerInfo.isHover = !markerInfo.isHover }}});

        store.dispatch(stateDetails(newMarkerInfo));
    };
    componentWillReceiveProps(nextProps) {
        this.setState({isHoverMe: nextProps.offer.isHover});
    }

    render() {
        const { offer } = this.props;
        const divStyle = {
            border: '5px solid pink'
        };
        const divStyle2 = {
            border: '5px solid blue'
        };

        return (
            <section
                onMouseEnter={() => this.onEnterMarker()}
                onMouseLeave={() => this.onLeaveMarker()}
                style={offer.isHover ? divStyle : divStyle2}>
                <Link
                    to={`/${offer.slug}`}
                >
                    <Card>
                        <div
                            className="card"
                        >
                            <div className="card__left">
                                <div className="cardDescription">
                                    <div className="cardDescription__wrapper">
                                        {/* Avatar */}
                                        <div className="cardDescription__left">
                                            <Avatar size="large" icon="user" />
                                        </div>
                                        {/* Description */}
                                        <div className="cardDescription__right">
                                            <h4 className="cardDescription--title">
                                                {offer.offerName}
                                            </h4>
                                            <div className="cardDescription__more">
                                                <h5 className="cardDescription--desc">
                                                    {offer.companyName}
                                                </h5>
                                                <p className="cardDescription--desc">
                                                    {offer.companyAddress[0].city}, {offer.companyAddress[1].address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card__right">
                                {offer.offerSalary}
                                <p>
                                    {offer.offerStatus === 30 ? 'new' : 'old'}
                                </p>
                                <div>
                                    {offer.offerTags.map(tag => <Badge count={tag} key={tag} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />)}
                                </div>
                            </div>
                        </div>
                    </Card>
                </Link>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    dates: state.dates.dates
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getApi,
    stateDetails
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Offer);
