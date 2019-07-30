import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });

const cards = [{ id: 'a', title: 'First card', content: 'lorem ipsum' }, { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }];
describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={cards} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const wrapper = shallow(<List cards={cards}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  });
  it('renders an empty list of cards', () => {
    const wrapper = shallow(<List />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  });
})
