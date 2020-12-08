import React from 'react';
import { shallow } from 'enzyme';
import NewTaskForm from './NewTaskForm';

describe('NewTaskForm', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<NewTaskForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
