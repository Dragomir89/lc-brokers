import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import AddOptions from '../../components/AddOptions';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<AddOptions />);
});

test('should render AddOptions component correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('TextInput should call changeFn and set new state', () => {
    const event = { target: { value: 'test val', name: 'constructionType' } };
    wrapper.find('TextInput').at(0).prop('changeFn')(event);
    expect(wrapper.state([event.target.name])).toBe(event.target.value);
});

test('should on click save button to set default state', () => {
    const event = { preventDefault: () => { } };
    wrapper.find('button').simulate('click', event);
    expect(wrapper.state()).toEqual({
        constructionType: '',
        estateType: '',
        state: '',
        neighborhood: ''
    });
});