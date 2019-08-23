import React from 'react';

const AddOfferLineInfo = ({ label, value, dimension='' }) => {
    const style = !!value ? 'modal__info-position' : 'modal__info-position-danger'
    value = !!value ? `${value} ${dimension}` : '-- няма стойност --';
    
    return (
        <div className={style}>
            <p>{label}: </p>
            <p>{value}</p>
        </div>
    )
}

export default AddOfferLineInfo;