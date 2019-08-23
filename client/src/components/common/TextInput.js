import React from 'react';

const TextInput = ({ value, label, name, placeholder, changeFn }) => {

    return (
        <div className='form-components__wrapper'>
            <div className='form-components__label'>
                <label>{label}</label>
            </div>
            <div>
                <input
                    onChange={changeFn}
                    value={value}
                    className='form-components__input'
                    type='text'
                    name={name}
                    placeholder={placeholder} />
            </div>
        </div>
    )
}

export default TextInput;