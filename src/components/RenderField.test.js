import React from 'react'
import { cleanup, render } from 'react-testing-library'

import { RenderField } from './RenderField';

describe('Component => RenderField', () => {
  afterEach(cleanup);
  it('should match snapshot', () => {
    const props = {
      input: {name:'MOCK_NAME'},
      label: 'MOCK_LABEL',
      type: 'number',
      meta: {
        touched: true,
        error: false,
        warning: false,
      }
    };

    const { container } = render(<RenderField {...props}/>);

    expect(container.firstChild).toMatchSnapshot();
  })
});


