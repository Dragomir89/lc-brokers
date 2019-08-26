import React from 'react';
import { Link } from 'react-router-dom';

const OfferBlock = ({ address, price, area, floor, neighborhood, estateType, _id }) => {

    return (
        <div className='content-container__offer-wrapper'>
            <div >
                <img height='180px' src='https://t-ec.bstatic.com/images/hotel/max1024x768/137/137238081.jpg' />
            </div>
            <div style={
                {
                    marginLeft: '5px',
                    height: '180px',
                    position: 'relative'
                }

            }>
                <div className='test'>
                    <h3 className='title__offer'> {neighborhood} </h3>
                    <h3 className='title__offer'> {estateType} </h3>

                </div>

                <div className='offer-info-line'>
                    Адрес: {address} - етаж: {floor}
                </div>

                <div className='offer-info-line'>
                    Площ: {area}кв.
                    </div>
                <div>
                    Цена: {price} евро
                    </div>
                <div className='button__offer-details-position'>
                    <Link to={`/edit-offer/${_id}`}>
                        <button className='button__offer-details'>
                            Виж Детайли
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OfferBlock;
