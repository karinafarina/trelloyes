import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });


describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Card />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
