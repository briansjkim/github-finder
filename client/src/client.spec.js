import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './components/App/App.jsx';

describe('Test Renders', () => {
    const wrapper = shallow(<App />);
    it('should render', () => {
        expect(wrapper).exists().toBe(true);
    })
});
