import React from 'react';
import { connect } from 'react-redux';
import { updateOffer } from '../../actions/offerActions';
import Modal from 'react-modal';
import EditOfferLineInfo from './EditOfferLineInfo';

const EditOfferModal = ({ isOpen, offerVlues, closeHandlerModal, options, editOffer, updateOffer }) => {

    const {
        constructionTypeId,
        constructionType,
        propertyTypeId,
        propertyType,
        state,
        stateVal,
        neighborhoodId,
        neighborhood,
        price,
        area,
        description,
        floor,
        address,
        propertyOwnerName,
        phoneNumber,
        phoneNumber2,
        phoneNumber3,
        lastCall,
        nextCall,
    } = offerVlues;

    const checkSelectChange = (selectType, label, oldPropId, newPropId, newProp) => {
        if (newPropId !== oldPropId && (options[selectType] && options[selectType].length > 0)) {
            const option = options[selectType].find(e => e._id === oldPropId);
            return option && (<EditOfferLineInfo label={label} prevVal={option.value} newVal={newProp} />)
        }
    }

    const saveEditedOffer = (e)=> {
        e.preventDefault();
        updateOffer({
            ...offerVlues,
            lastCall: lastCall.toISOString(), 
            nextCall: nextCall.toISOString() 
        });
    }
    
    console.log('render')
    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            contentLabel='second modal'
            onRequestClose={closeHandlerModal}
            closeTimeoutMS={500}
            className='modal'
        >
            <h1 className='title__offer title__center'>Искате ли да запазите промените ?</h1>
            <div className='model__test-style content-container__offer-modal'>

                {checkSelectChange('constructionTypes',
                    'Вид стротелство',
                    editOffer.constructionTypeId,
                    constructionTypeId,
                    constructionType)}
                {checkSelectChange('propertyTypes',
                    'Вид имот',
                    editOffer.propertyTypeId,
                    propertyTypeId,
                    propertyType)}
                {checkSelectChange('states',
                    'Състояние',
                    editOffer.state,
                    state,
                    stateVal)}
                {checkSelectChange('neighborhoods',
                    'Квартал',
                    editOffer.neighborhoodId,
                    neighborhoodId,
                    neighborhood
                )}

                <EditOfferLineInfo label='Площ' prevVal={editOffer.price} newVal={price} />
                <EditOfferLineInfo label='Етаж' prevVal={editOffer.floor} newVal={floor} />
                <EditOfferLineInfo label='Площ' prevVal={editOffer.area} newVal={area} />
                <EditOfferLineInfo label='Описание' prevVal={editOffer.description} newVal={description} />
                <EditOfferLineInfo label='Адрес' prevVal={editOffer.address} newVal={address} />
                <EditOfferLineInfo label='Собственик' prevVal={editOffer.propertyOwnerName} newVal={propertyOwnerName} />
                <EditOfferLineInfo label='Тлефон Главен' prevVal={editOffer.phoneNumber} newVal={phoneNumber} />
                <EditOfferLineInfo label='Тлефон 2' prevVal={editOffer.phoneNumber2} newVal={phoneNumber2} />
                <EditOfferLineInfo label='Тлефон 3' prevVal={editOffer.phoneNumber3} newVal={phoneNumber3} />
                <EditOfferLineInfo label='Предишно обаждане'
                    prevVal={editOffer.lastCall && editOffer.lastCall.format('DD/MM/YYYY')}
                    newVal={lastCall && lastCall.format('DD/MM/YYYY')} />
                <EditOfferLineInfo label='Следващо обаждане'
                    prevVal={editOffer.nextCall && editOffer.nextCall.format('DD/MM/YYYY')}
                    newVal={nextCall && nextCall.format('DD/MM/YYYY')} />
                <div style={
                    {
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <button
                        className='button__success'
                        onClick={closeHandlerModal}>
                        Назад
                    </button>
                    <button className='button__danger'>
                        Изтриване
                    </button>
                    <button
                        className='button__primary'
                        onClick={saveEditedOffer}
                        >
                        Запази
                    </button>
                </div>
            </div>
        </Modal>
    )

}

const mapStateToProps = (state) => {
    return {
        editOffer: state.editOffer,
        options: state.options
    }
}

const actions = {
    updateOffer
}

export default connect(mapStateToProps, actions)(EditOfferModal);
