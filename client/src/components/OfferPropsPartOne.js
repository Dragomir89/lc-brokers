import React from 'react';

import Select from './common/Select';
import TextInput from './common/TextInput';
import { connect } from 'react-redux';
import { getOptions } from '../actions/optionsActions';

class OfferPropsPartOne extends React.Component {

    componentDidMount () {
        this.props.getOptions()
    }

    render () {
        const { constructionTypes, propertyTypes, states, neighborhoods } = this.props.options;
        const { constructionTypeId, propertyTypeId, state, neighborhoodId } = this.props.values;
        const { floor, description, area, price } = this.props.values;
        return (
            <div>
                <div className='form__add-offer-layout'>
                    <div className='form__add-offer-section'>
                        <Select
                            selectedOptionId={constructionTypeId}
                            options={constructionTypes}
                            label='Вид Стоителство'
                            name='constructionTypeId' changeFn={this.props.changeHandler} />
                        <Select
                            selectedOptionId={propertyTypeId}
                            options={propertyTypes}
                            label='Вид Имот'
                            name='propertyTypeId' changeFn={this.props.changeHandler} />
                        <Select
                            selectedOptionId={state}
                            options={states}
                            label='Състояние'
                            name='state' changeFn={this.props.changeHandler} />
                        <Select
                            selectedOptionId={neighborhoodId}
                            options={neighborhoods}
                            label='Квартал'
                            name='neighborhoodId' changeFn={this.props.changeHandler} />
                    </div>
                    <div className='form__add-offer-section'>
                        <TextInput
                            label='Цена'
                            name='price'
                            value={price}
                            placeholder='Евро' changeFn={this.props.changeHandler} />
                        <TextInput
                            label='Квадратура'
                            name='area'
                            value={area}
                            placeholder='кв/м' changeFn={this.props.changeHandler} />
                        <TextInput
                            label='Описание'
                            name='description'
                            value={description}
                            placeholder='Описание' changeFn={this.props.changeHandler} />
                        <TextInput
                            label='Етаж'
                            name='floor'
                            value={floor}
                            placeholder='1, 2, 3 ...' changeFn={this.props.changeHandler} />
                    </div>
                </div>
                <div className='button__relative-wrapper'>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.nextHandler();
                        }}
                        className='button__success button__offer-details-position'>Продължи</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({ options: state.options });
const actions = { getOptions }

export default connect(mapStateToProps, actions)(OfferPropsPartOne);