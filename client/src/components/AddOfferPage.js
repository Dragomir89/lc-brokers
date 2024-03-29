import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfferPropsPartOne from './OfferPropsPartOne';
import OfferPropsPartTwo from './OfferPropsPartTwo';
import moment from 'moment';
import AddOfferModal from './modals/AddOfferModal';
import { POST_OFFER_SUCCESS, POST_OFFER_ERROR } from '../actions/offerActionTypes';

export class AddOfferPage extends Component {
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


    componentWillReceiveProps (newProps) {
        if (newProps.offerPostStatus === POST_OFFER_SUCCESS) { /// to be fixed
            this.setState(() => ({ showAddOfferModal: false }));
            //// I use setTimeout because I'd like furstable close the modal and then restart the form
            setTimeout(() => {
                this.setState(() => ({ ...this.defaultState }));
            }, 600);
        } else if (newProps.offerPostStatus === POST_OFFER_ERROR) {
            this.setState(() => ({ offerPostStatus: POST_OFFER_ERROR }));
        }

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
                                id='part-one'
                                values={this.state}
                                changeHandler={this.changeHandler}
                                nextHandler={this.nextHandler} />)
                            :
                            (<OfferPropsPartTwo
                                id='part-two'
                                values={this.state}
                                changeHandler={this.changeHandler}
                                backHandler={this.backHandler}
                                prevCallChangeHandler={this.prevCallChangeHandler}
                                nextCallChangeHandler={this.nextCallChangeHandler}
                                checkOfferHandler={this.checkOfferHandler} />)
                    }
                </form>
                <AddOfferModal
                    isOpen={this.state.showAddOfferModal}
                    offerVlues={this.state}
                    closeHandlerModal={this.closeHandlerModal}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { offerPostStatus: state.offerPostStatus }
}

export default connect(mapStateToProps)(AddOfferPage);
