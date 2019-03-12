import React from 'react'
import { cleanup, render } from 'react-testing-library'

jest.mock('../containers/ContactForm', () => () => <h1>Home</h1>);

describe('Component => RenderField', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const ContactPage = require('./ContactPage').ContactPage;

    const { container } = render(<ContactPage/>);

    expect(container.firstChild).toMatchSnapshot();
  })
});


