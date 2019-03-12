import React from 'react'
import { cleanup } from 'react-testing-library'

import { Username } from './Username';
import { renderReduxForm } from '../utilities/render-redux-form';

describe('Component => Username', () => {
  afterEach(cleanup);
  it('should match snapshot', () => {
    const { container } = renderReduxForm(Username);

    expect(container.firstChild).toMatchSnapshot();
  })
});


