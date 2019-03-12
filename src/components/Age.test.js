import React from 'react'
import { cleanup } from 'react-testing-library'

import { Age } from './Age';
import { renderReduxForm } from '../utilities/render-redux-form';

describe('Component => Age', () => {
  afterEach(cleanup);
  it('should match snapshot', () => {
    const { container } = renderReduxForm(Age);

    expect(container.firstChild).toMatchSnapshot();
  })
});


