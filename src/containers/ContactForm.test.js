import * as reduxForm from 'redux-form';
import { Form } from '../components/Form';

const mockCreateReduxForm = jest.fn();
jest.mock('redux-form', () => {
  return {
    reduxForm: jest.fn(() => mockCreateReduxForm)
  };
});

describe('Containers => Contact Form', () => {
  it('should do something', () => {
    require('./ContactForm');

    expect(reduxForm.reduxForm).toHaveBeenCalled();
    expect(reduxForm.reduxForm).toHaveBeenCalledWith({ form: 'contact' });
    expect(mockCreateReduxForm).toHaveBeenCalled();
    expect(mockCreateReduxForm).toHaveBeenCalledWith(Form);
  })
});
