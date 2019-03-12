import React from 'react'
import { Field } from "redux-form";
import { RenderField } from "./RenderField";
import { aol, email } from "../validation";

export function Email() {
  return <Field
    name="email"
    type="email"
    component={RenderField}
    label="Email"
    validate={email}
    warn={aol}
  />;
}
