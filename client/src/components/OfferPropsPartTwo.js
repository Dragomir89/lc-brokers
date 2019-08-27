import React from 'react';
import TextInput from './common/TextInput';
import TextArea from './common/TextArea';
import CustomSingleDatePicker from './common/SingleDatePicher';

export const OfferPropsPartTwo = (
    { changeHandler, backHandler, checkOfferHandler, values, prevCallChangeHandler,nextCallChangeHandler }) => {
    
    const { number, address, info, propertyOwnerName } = values;
    const { phoneNumber, phoneNumber2, phoneNumber3, lastCall, nextCall } = values;
    
    return (
        <div>
            <div className='form__add-offer-layout'>
                <div className='form__add-offer-section'>
                    <TextInput
                        label='Номер На Оферта'
                        name='number'
                        value={number}
                        placeholder='123456 ...' changeFn={changeHandler} />
                    <TextInput
                        label='Адрес'
                        name='address'
                        value={address}
                        placeholder='Улица, номер, етаж ...' changeFn={changeHandler} />
                    <TextArea
                        label='Долълнително Инфо'
                        name='info'
                        value={info}
                        placeholder='Инфо ...' changeFn={changeHandler} />
                    <CustomSingleDatePicker
                        label='Предишно обаждане'
                        date={lastCall}
                        onDateChange={prevCallChangeHandler}
                        numberOfMonths={1}
                    />
                </div>
                <div className='form__add-offer-section'>
                    <TextInput
                        label='Име на Собственик'
                        name='propertyOwnerName'
                        value={propertyOwnerName}
                        placeholder='Любомир Петров ...' changeFn={changeHandler} />
                    <TextInput
                        label='Тлефон Главен'
                        name='phoneNumber'
                        value={phoneNumber}
                        placeholder='889358720' changeFn={changeHandler} />
                    <TextInput
                        label='Тлефон 2'
                        name='phoneNumber2'
                        value={phoneNumber2}
                        placeholder='Не е задължителен' changeFn={changeHandler} />
                    <TextInput
                        label='Тлефон 3'
                        name='phoneNumber3'
                        value={phoneNumber3}
                        placeholder='Не е задължителен' changeFn={changeHandler} />
                    <CustomSingleDatePicker
                        label='Следващо обаждане'
                        date={nextCall}
                        onDateChange={nextCallChangeHandler}
                        numberOfMonths={1}
                    />
                </div>
            </div>
            <div className='button__relative-wrapper'>
                <button onClick={(e) => { e.preventDefault(); backHandler(); }}
                    className='button__success'>Назад</button>
                <button onClick={(e) => { e.preventDefault(); checkOfferHandler(); }}
                    className='button__primary button__offer-details-position'>Преглед на офертата</button>
            </div>
        </div>
    )
}

export default OfferPropsPartTwo;