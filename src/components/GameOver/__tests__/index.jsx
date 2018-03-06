/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import GameOver from '../index';

describe('GameOver', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <GameOver onClick={jest.fn()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render two spans that each contain a star', () => {
    const component = shallow(
      <GameOver onClick={jest.fn()} />
    );
    const star = component.find('.game-over-star');
    expect(star.length).toEqual(2);

    expect(star.get(0).type).toEqual('span');
    expect(star.get(0).props.children).toEqual('⭐');

    expect(star.get(1).type).toEqual('span');
    expect(star.get(1).props.children).toEqual('⭐');
  });

  it('should render a span for the game over text', () => {
    const component = shallow(
      <GameOver onClick={jest.fn()} />
    );
    const text = component.find('.game-over-text');
    expect(text.length).toEqual(1);

    expect(text.get(0).props.children).toEqual('You did it!');
  });

  it('should render a button with the onClick prop', () => {
    const onClick = jest.fn();

    const component = mount(
      <GameOver onClick={onClick} />
    );
    const button = component.find('button');
    expect(button.length).toEqual(1);

    expect(button.get(0).props.onClick).toBe(onClick);
  });
});
