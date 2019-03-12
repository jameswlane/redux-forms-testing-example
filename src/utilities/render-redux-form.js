import React from 'react';
import { reduxForm, reducer } from 'redux-form'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-testing-library'

const rootReducer = combineReducers({
  form: reducer
});

export function renderReduxForm(Component, State = {}) {
  const store = createStore(rootReducer, State);
  const Form = props => (<form><Component/></form>);
  const createReduxForm = reduxForm({ form: 'contact' });
  const ConnectedComponent = createReduxForm(Form);
  return {
    ...render(<Provider store={store}><ConnectedComponent/></Provider>),
    store,
  };
}
