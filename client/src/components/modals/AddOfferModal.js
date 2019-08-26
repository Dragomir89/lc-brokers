import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import AddOfferLineInfo from './AddOfferLineInfo';
import { POST_OFFER_ERROR } from '../../actions/offerActionTypes';
import { postOffer } from '../../actions/offerActions';

const AddOfferModal = ({ isOpen, offerVlues, closeHandlerModal, postOffer }) => {

    const {
        constructionType,
        propertyType,
        stateVal,
        neighborhood,
        price,
        area,
        description,
        floor,
        number,
        address,
        propertyOwnerName,
        phoneNumber,
        phoneNumber2,
        phoneNumber3,
        lastCall,
        nextCall,
        offerPostStatus } = offerVlues;

    const showReqMessage = () => {
        let message = ''
        if (offerPostStatus) {
            message = offerPostStatus === POST_OFFER_ERROR ?
                (<p className='messages__fail-request'>! Офертата не беше качена !</p>) :
                (<p className='messages__success-request'>Добавихте офертата успешно</p>);
        }
        return message;
    }

    const saveOfferHandler = () => { /// REMOVE !!!!!
        const { nextCall, lastCall } = offerVlues;
        postOffer({ ...offerVlues, lastCall: lastCall.toISOString(), nextCall: nextCall.toISOString() });
    }

    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            contentLabel='first modal'
            onRequestClose={closeHandlerModal}
            closeTimeoutMS={500}
            className='modal'
        >
            <h1 className='title__offer title__center'>Искате ли да запазите тази оферта ?</h1>
            <div className='model__test-style content-container__offer-modal'>

                <AddOfferLineInfo label='Строителство' value={constructionType} />
                <AddOfferLineInfo label='Вид Имот' value={propertyType} />
                <AddOfferLineInfo label='Състояние' value={stateVal} />
                <AddOfferLineInfo label='Квартал' value={neighborhood} />

                <AddOfferLineInfo label='Цена' value={price} dimension='евро' />
                <AddOfferLineInfo label='Квадратура' value={area} dimension='кв/м' />
                <AddOfferLineInfo label='Описание' value={description} />
                <AddOfferLineInfo label='Номер На Оферта' value={number} />
                <AddOfferLineInfo label='Адрес' value={address} />
                <AddOfferLineInfo label='Етаж' value={floor} dimension={' ет'} />
                <AddOfferLineInfo label='Собственик' value={propertyOwnerName} />

                <AddOfferLineInfo label='Главен Тлефон' value={phoneNumber} />
                <AddOfferLineInfo label='Тлефон 2' value={phoneNumber2} />
                <AddOfferLineInfo label='Тлефон 3' value={phoneNumber3} />
                <AddOfferLineInfo label='Последно обаждане' value={lastCall.format("MM/DD/YYYY")} />
                <AddOfferLineInfo label='Следващо обаждане' value={nextCall.format("MM/DD/YYYY")} />


                <div>
                    {showReqMessage()}
                </div>


                <div className='button__relative-wrapper'>
                    <button
                        onClick={closeHandlerModal}
                        className='button__success'>
                        Назад
                </button>
                    <button
                        onClick={saveOfferHandler}
                        className='button__danger button__offer-details-position'>
                        Запази офертата !
                    </button>
                </div>
            </div>

        </Modal>
    )

}

const actions = { postOffer };

export default connect(null, actions)(AddOfferModal);
