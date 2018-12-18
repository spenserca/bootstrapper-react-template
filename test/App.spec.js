/**
 * @jest-environment jsdom
 */

import React from 'react';
import App from '../src/App';
import {shallow} from './enzyme';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should contain Hello World!', () => {
    expect(wrapper.contains('Hello World!')).toEqual(true);
  });
});
