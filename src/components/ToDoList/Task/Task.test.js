import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('Task', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Task />);
    expect(wrapper).toMatchSnapshot();
  });
});
