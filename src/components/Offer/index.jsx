import React, { Component } from 'react';
import { Card, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getApi } from '../../actions';

import './styles.css'

class Offer extends Component {

    componentWillMount() {

        // const getApi = this.props.getApi;
        //
        // getApi();

        const dates = this.props.dates;

        const { offer } = this.props;

        let slugName;
        slugName = `${offer.companyAddress[0].city}-${offer.companyName}-${offer.offerName}`;
        slugName = slugName.split(' ').join('-');
        slugName = slugName.toLowerCase();

        // offer.dispatch({"slug": slugName})

        // console.log(offer)
    }

    render() {
        const { offer } = this.props;
        // Slug
        let slugName;
        slugName = `${offer.companyAddress[0].city}-${offer.companyName}-${offer.offerName}`;
        slugName = slugName.split(' ').join('-');
        slugName = slugName.toLowerCase();

        return (
            <section>
                <Link to={`/${slugName}`}>
                    <Card>
                        <div className="card">
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
    getApi
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Offer);
