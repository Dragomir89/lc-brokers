import React from 'react'

const EditOfferLineInfo = ({ prevVal, newVal, label }) => {
    const hasChange = prevVal.toString() !== newVal.toString();
    return hasChange ? (
        <div>
            <h3>{label}</h3>
            <p>{prevVal || '-няма-'} ----  {newVal}</p>
        </div>
    ) : (null);
}

export default EditOfferLineInfo;