import React from 'react'
import ContactForm from '../containers/ContactForm'

export class ContactPage extends React.Component {
  submit = values => {
    console.log(values)
  };

  render() {
    return <ContactForm onSubmit={this.submit}/>
  }
}
