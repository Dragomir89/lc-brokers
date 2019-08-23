import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import qs from 'querystring';
import TextInput from './common/TextInput';
import Select from './common/Select';
import { getOptions } from '../actions/optionsActions';
import { getOffers } from '../actions/offerActions';
import CustomSingleDatePicker from './common/SingleDatePicher';

class Filters extends React.Component {
    state = {
        focused: false,
        phoneNumber: '',
        nextCall: moment()
    }


    componentDidMount () {
        this.props.getOptions();
    }

    onChahgeHandler = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }));
    }

    handleClick = (e) => {
        e.preventDefault();
        const querystring = qs.stringify(
            { ...this.state, nextCall: this.state.nextCall.format("YYYY-MM-DD") });
        this.props.getOffers(1, querystring);
    }

    onDateChange = (nextCall) => { this.setState(() => ({ nextCall })) };

    onFocusChange = ({ focused }) => { this.setState(() => ({ focused: focused })) }

    render () {
        const style01 = {
            display: 'flex',
            justifyContent: 'space-between'
        }
        const style02 = {
            width: '25%'
        }
        const { constructionTypes, propertyTypes, states, neighborhoods } = this.props.options;
        return (
            <form>
                <div style={style01}>
                    <div style={style02}>
                        <Select
                            options={constructionTypes}
                            label='Строителство'
                            name='constructionTypeId'
                            changeFn={this.onChahgeHandler} />
                    </div>
                    <div style={style02}>
                        <Select

                            options={propertyTypes}
                            label='Вид Имот'
                            name='propertyTypeId'
                            changeFn={this.onChahgeHandler} />
                    </div>
                    <div style={style02}>
                        <Select
                            options={states}
                            label='Състояние'
                            name='state'
                            placeholder='Телефон'
                            changeFn={this.onChahgeHandler} />
                    </div>

                </div>
                <div style={style01}>
                    <div style={style02}>
                        <Select
                            options={neighborhoods}
                            label='Квартал'
                            name='neighborhoodId'
                            changeFn={this.onChahgeHandler} />
                    </div>
                    <div style={style02}>
                        <CustomSingleDatePicker
                            label='Следващо обаждане'
                            date={this.state.nextCall}
                            onDateChange={this.onDateChange}
                            focused={this.state.focused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                        />
                        
                    </div>
                    <div style={style02}>
                        <TextInput
                            value={this.state.phoneNumber}
                            label='Телефон'
                            name='phoneNumber'
                            placeholder='Телефон'
                            changeFn={this.onChahgeHandler} />
                    </div>

                </div>
                <button
                    style={{ width: '100%' }}
                    className='button__primary'
                    onClick={this.handleClick}>
                    Търси
                </button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({ options: state.options });
const actions = { getOptions, getOffers }
export default connect(mapStateToProps, actions)(Filters);