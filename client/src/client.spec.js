import React from 'react';
import App from './components/App/App.jsx';
import { shallow, mount, render } from 'enzyme';

describe('App', () => {
    const wrapper = shallow(<App />)
    it('Testing if App is successfully rendered', () => {
        expect(wrapper.exists()).toBe(true);
    })
});
