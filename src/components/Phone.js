import React from 'react'
import { Field } from "redux-form";
import { RenderField } from "./RenderField";
import { phoneNumber, required } from "../validation";

export function Phone() {
  return <Field
    name="phone"
    type="number"
    component={RenderField}
    label="Phone number"
    validate={[required, phoneNumber]}
  />;
}
