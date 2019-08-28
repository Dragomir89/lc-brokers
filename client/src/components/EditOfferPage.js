import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfferPropsPartOne from './OfferPropsPartOne';
import OfferPropsPartTwo from './OfferPropsPartTwo';
import moment from 'moment';
import { EDIT_POST_OFFER_SUCCESS, EDIT_POST_OFFER_ERROR } from '../actions/offerActionTypes';
import { postOffer, getCurrentOffer } from '../actions/offerActions';
import EditOfferModal from './modals/EditOfferModal';

class EditOfferPage extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            showFierstPart: true,
            constructionTypeId: '',
            constructionType: '',
            propertyTypeId: '',
            propertyType: '',
            state: '',
            stateVal: '',
            neighborhoodId: '',
            neighborhood: '',
            price: '',
            area: '',
            description: '',
            floor: '',
            number: '',
            address: '',
            info: '',
            propertyOwnerName: '',
            phoneNumber: '',
            phoneNumber2: '',
            phoneNumber3: '',
            lastCall: moment(),
            nextCall: moment(),
            showAddOfferModal: false,
            offerPostStatus: ''
        }
        this.state = { ...this.defaultState };
    }

    componentDidMount () {
        const { id } = this.props.match.params;
        this.props.getCurrentOffer(id);
    }

    checkForCurrentOffer = (newProps) => {
        if (newProps.editOffer) {
            this.setState(() => ({ ...newProps.editOffer }));
        }
    }

    handleRequiestStatus = (newProps) => {
        if (newProps.offerPostStatus === EDIT_POST_OFFER_SUCCESS) { /// to be fixed
            this.setState(() => ({ showAddOfferModal: false }));
        } else if (newProps.offerPostStatus === EDIT_POST_OFFER_ERROR) {
            this.setState(() => ({ 
                offerPostStatus: EDIT_POST_OFFER_ERROR 
            }));
        }
    }

    componentWillReceiveProps (newProps) {
        this.checkForCurrentOffer(newProps);
        this.handleRequiestStatus(newProps);
    }

    selectedSetSelectedTextValues = (e, name) => {
        if (e.target.options) {
            const index = e.target.options.selectedIndex;
            const options = e.target.options;
            const value = options[index].innerText;

            if (name === 'constructionTypeId') {
                this.setState(() => ({ constructionType: value }));
            } else if (name === 'propertyTypeId') {
                this.setState(() => ({ propertyType: value }));
            } else if (name === 'state') {
                this.setState(() => ({ stateVal: value }));
            } else if (name === 'neighborhoodId') {
                this.setState(() => ({ neighborhood: value }));
            }
        }

    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.selectedSetSelectedTextValues(e, name);
        this.setState(() => ({ [name]: value }));
    }

    prevCallChangeHandler = (lastCall) => { this.setState(() => ({ lastCall })) };

    nextCallChangeHandler = (nextCall) => { this.setState(() => ({ nextCall })) };

    nextHandler = () => { this.setState(() => ({ showFierstPart: false })); }

    backHandler = () => { this.setState(() => ({ showFierstPart: true })); }

    checkOfferHandler = () => {
        this.setState(() => ({
            showAddOfferModal: true,
            offerPostStatus: ''
        }));
    }

    closeHandlerModal = () => { this.setState(() => ({ showAddOfferModal: false })); }

    render () {
        return (
            <div className='content-container'>
                <h1 className='title__page'>Добави оферта</h1>
                <form>
                    {
                        this.state.showFierstPart ?
                            (<OfferPropsPartOne
                                values={this.state}
                                changeHandler={this.changeHandler}
                                nextHandler={this.nextHandler} />)
                            :
                            (<OfferPropsPartTwo
                                values={this.state}
                                changeHandler={this.changeHandler}
                                backHandler={this.backHandler}
                                prevCallChangeHandler={this.prevCallChangeHandler}
                                nextCallChangeHandler={this.nextCallChangeHandler}
                                checkOfferHandler={this.checkOfferHandler} />)
                    }
                </form>
                <EditOfferModal
                    isOpen={this.state.showAddOfferModal}
                    offerVlues={this.state}
                    closeHandlerModal={this.closeHandlerModal}
                    saveOfferHandler={this.saveOfferHandler}
                />

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        offerPostStatus: state.offerPostStatus,
        editOffer: state.editOffer
    }
}
const actions = { postOffer, getCurrentOffer }

export default connect(mapStateToProps, actions)(EditOfferPage);
