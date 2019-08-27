import React from 'react';
const Select = ({ options = [], label, name, changeFn, selectedOptionId }) => {
    options = options.map((option) => {
        if(option._id === selectedOptionId) {
            return(
                <option
                    selected
                    key={option._id}
                    value={option._id}>
                    {option.value}
                </option>)
        }

        return (
            <option
                key={option._id}
                value={option._id}>
                {option.value}
            </option>);
    });
    return (
        <div className='form-components__wrapper'>
            <div className='form-components__label'>
                <label>{label}</label>
            </div>
            <div>
                <select
                    // defaultValue={defaultValue}
                    onChange={changeFn}
                    name={name}
                    className='form-components__input'>
                    <option value=''>--избери--</option>
                    {options}
                </select>
            </div>
        </div>
    )
}

export default Select;