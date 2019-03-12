import React from 'react'
import { cleanup } from 'react-testing-library'

import { Email } from './Email';
import { renderReduxForm } from '../utilities/render-redux-form';

describe('Component => Email', () => {
  afterEach(cleanup);
  it('should match snapshot', () => {
    const { container } = renderReduxForm(Email);

    expect(container.firstChild).toMatchSnapshot();
  })
});


