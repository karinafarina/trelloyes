import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cards = [{ id: 'a', title: 'First card', content: 'lorem ipsum' }, { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }];
describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={cards} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List cards={cards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders an empty list of cards', () => {
    const tree = renderer
      .create(<List cards={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
