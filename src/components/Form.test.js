import React from 'react'
import { cleanup, render } from 'react-testing-library'

import { Form } from './Form';
import * as Username from './Username';
import * as  Email from './Email';
import * as Age from './Age';
import * as  Phone from './Phone';

describe('Component => RenderField', () => {
  beforeEach(() => {
    jest.spyOn(Username, 'Username').mockImplementation(() => (<span>Username</span>));
    jest.spyOn(Email, 'Email').mockImplementation(() => (<span>Email</span>));
    jest.spyOn(Age, 'Age').mockImplementation(() => (<span>Age</span>));
    jest.spyOn(Phone, 'Phone').mockImplementation(() => (<span>Phone</span>));
  })
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });
  it('should match snapshot', () => {
    const props = {
      handleSubmit: jest.fn(),
      pristine: true,
      reset: jest.fn(),
      submitting: false
    };

    const { container } = render(<Form {...props}/>);

    expect(container.firstChild).toMatchSnapshot();
  })
});


