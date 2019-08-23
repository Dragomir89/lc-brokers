import React, { Component } from 'react';
import TextInput from './common/TextInput';

class AddOpitonsPage extends Component {

    state = {
        constructionType: '',
        estateType: '',
        state: '',
        neighborhood: ''
    }

    changeFn = (e) => {
        const { name, value } = e.target;
        this.setState(() => {
            return { [name]: value }
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState(() => {
            return  {
                constructionType: '',
                estateType: '',
                state: '',
                neighborhood: ''
            } 
        });
    }

    render () {
        return (
            <div className='content-container'>
                <h1 className='title__page'>Добвавете опции за офертите</h1>
                <form>
                    <TextInput
                        value={this.state.constructionType}
                        label='Вид Стоителство'
                        name='constructionType'
                        placeholder='старо, ново, ЕПК ...' changeFn={this.changeFn} />
                    <TextInput
                        value={this.state.estateType}
                        label='Вид Имот'
                        name='estateType'
                        placeholder='едностаен, двустаен, къща ...'
                        changeFn={this.changeFn} />
                    <TextInput
                        value={this.state.state}
                        label='Състояние'
                        name='state'
                        placeholder='нает, свободен ...'
                        changeFn={this.changeFn} />
                    <TextInput
                        value={this.state.neighborhood}
                        label='Квартал'
                        name='neighborhood'
                        placeholder='лозенец, цетър, стрелбище ...'
                        changeFn={this.changeFn} />
                    <button 
                        onClick={this.handleClick}
                        className='button__primary'>
                        Запази
                    </button>
                </form>
            </div>
        )
    }
}

export default AddOpitonsPage;