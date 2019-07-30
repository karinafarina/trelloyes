import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const wrapper = shallow(<Card />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  });
})
