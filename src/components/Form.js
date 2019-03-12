import React from 'react'

import { Username } from './Username';
import { Email } from './Email';
import { Age } from './Age';
import { Phone } from './Phone';

export const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Username/>
      <Email/>
      <Age/>
      <Phone/>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
};
