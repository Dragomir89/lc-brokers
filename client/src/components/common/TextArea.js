import React from 'react';

const TextArea = ({ value, label, name, placeholder, changeFn }) => {

    return (
        <div className='form-components__wrapper'>
            <div className='form-components__label'>
                <label>{label}</label>
            </div>
            <div>
                <textarea
                    onChange={changeFn}
                    value={value}
                    className='form-components__input form__textarea'
                    name={name}
                    placeholder={placeholder} ></textarea>
            </div>
        </div>
    )
}

export default TextArea;