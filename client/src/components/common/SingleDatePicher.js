import React from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';


class CustomSingleDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { focused: false }
    }

    onFocusChange = ({focused}) => { this.setState(() => ({ focused })) }

    render () {
        const { label, date, onDateChange, numberOfMonths } = this.props;
        return (
            <div className='form-components__wrapper'>
                <div className='form-components__label'>
                    <label>{label}</label>
                </div>
                <SingleDatePicker
                    date={date}
                    onDateChange={onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={numberOfMonths}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

export default CustomSingleDatePicker;