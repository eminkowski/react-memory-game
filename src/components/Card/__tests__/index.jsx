/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Card from '../index';

describe('Card', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Card id="1" value="1" isFlipped isMatch onClick={jest.fn()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display the card value that matches its prop value of 1', () => {
    const component = shallow(
      <Card id="1" value="1" isFlipped isMatch onClick={jest.fn()} />
    );
    const front = component.find('.card-front');
    expect(front.text()).toEqual('1');
  });

  it('should have the hidden class when the card is not flipped', () => {
    const component = shallow(
      <Card id="1" value="1" isFlipped={false} isMatch={false} onClick={jest.fn()} />
    );
    const container = component.find('.card-container');
    expect(container.hasClass('card-container--hidden')).toEqual(true);
  });

  it('should -not- have the hidden class when the card is flipped', () => {
    const component = shallow(
      <Card id="1" value="1" isFlipped isMatch={false} onClick={jest.fn()} />
    );
    const container = component.find('.card-container');
    expect(container.hasClass('card-container--hidden')).toEqual(false);
  });

  it('should -not- have the matched class when the card has no match', () => {
    const component = shallow(
      <Card id="1" value="1" isFlipped isMatch={false} onClick={jest.fn()} />
    );
    const front = component.find('.card-front');
    expect(front.hasClass('card--matched')).toEqual(false);
  });

  it('should have the matched class when the card has a match', () => {
    const component = shallow(
      <Card id="1" value="1" isFlipped isMatch onClick={jest.fn()} />
    );
    const front = component.find('.card-front');
    expect(front.hasClass('card--matched')).toEqual(true);
  });

  it('should render a figure with the onClick prop', () => {
    const onClick = jest.fn();

    const component = mount(
      <Card id="1" value="1" isFlipped={false} isMatch onClick={onClick} />
    );
    const figure = component.get(0);
    expect(figure.props.onClick).toBe(onClick);
  });
});
