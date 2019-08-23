import React, { Component } from 'react';
import OfferBlok from './OfferBlok';
import { connect } from 'react-redux';
import { getOffers } from '../actions/offerActions';
import Filters from './Filters';

class OffersPage extends Component {

    render () {        
        const offers = this.props.offers.map(offer => (<OfferBlok key={offer._id} {...offer} />));
        return (
            <div className='content-container'>
                <Filters />
                {this.props.offers.length > 0 && 
                    (<div><h1 className='title__page'>Оферти</h1>{offers} </div>) }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ offers: state.offers });
const actions = { getOffers }

export default connect(mapStateToProps, actions)(OffersPage);