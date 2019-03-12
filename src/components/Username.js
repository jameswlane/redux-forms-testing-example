import React from 'react'
import { Field } from "redux-form";
import { RenderField } from "./RenderField";
import { alphaNumeric, maxLength, minLength, required } from "../validation";

export function Username() {
  return <Field
    name="username"
    type="text"
    component={RenderField}
    label="Username"
    validate={[required, maxLength, minLength]}
    warn={alphaNumeric}
  />;
}
