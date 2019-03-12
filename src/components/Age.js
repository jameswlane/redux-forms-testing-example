import React from 'react'
import { Field } from "redux-form";
import { RenderField } from "./RenderField";
import { minValue, number, required, tooYoung } from "../validation";

export function Age() {
  return <Field
    name="age"
    type="number"
    component={RenderField}
    label="Age"
    validate={[required, number, minValue]}
    warn={tooYoung}
  />;
}
