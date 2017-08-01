import React from 'react';
import Form from '../components/Form';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Form handleChange={this.handleChange} {...this.state} />
    );
  }
}
