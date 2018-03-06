/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Table from '../index';

describe('Table', () => {
  // NOTE: Cannot be snapshot tested because card numbers are random every time

  // it('should render correctly', () => {
  //   const component = renderer.create(
  //     <Table cardCount={12} />
  //   );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should have a cards array length of 24 when card count is -2', () => {
    const component = shallow(
      <Table cardCount={-2} />
    );
    expect(component.state('cards').length).toBe(24);
  });

  it('should have a cards array length of 24 when card count is 0', () => {
    const component = shallow(
      <Table cardCount={0} />
    );
    expect(component.state('cards').length).toBe(24);
  });

  it('should have a cards array length of 24 when card count is 3', () => {
    const component = shallow(
      <Table cardCount={3} />
    );
    expect(component.state('cards').length).toBe(24);
  });

  it('should have a cards array length matching prop value of 12', () => {
    const component = shallow(
      <Table cardCount={12} />
    );
    expect(component.state('cards').length).toBe(12);
  });

  it('should have a cards array length matching prop value of 18', () => {
    const component = shallow(
      <Table cardCount={18} />
    );
    expect(component.state('cards').length).toBe(18);
  });

  it('should have a cards array length matching prop value of 24', () => {
    const component = shallow(
      <Table cardCount={24} />
    );
    expect(component.state('cards').length).toBe(24);
  });
});
