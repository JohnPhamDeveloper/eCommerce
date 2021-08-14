import React from 'react';

import FormInput from '../../components/form-input/form-input.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label={'Email'} id="email" name="email" value={this.state.email} required onChange={this.handleChange} />
          <FormInput label={'Password'} id="password" name="password" value={this.state.password} required onChange={this.handleChange} />

          <input type="submit" value="Submit Form"></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
