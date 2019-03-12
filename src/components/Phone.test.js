import React from 'react'
import { cleanup } from 'react-testing-library'

import { Phone } from './Phone';
import { renderReduxForm } from '../utilities/render-redux-form';

describe('Component => Phone', () => {
  afterEach(cleanup);
  it('should match snapshot', () => {
    const { container } = renderReduxForm(Phone);

    expect(container.firstChild).toMatchSnapshot();
  })
});


