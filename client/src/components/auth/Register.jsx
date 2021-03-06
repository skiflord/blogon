import React from 'react';
import { Button, Form, Icon, Message } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
 
class RegisterForm extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, data){
    this.setState({[data.name]: data.value});
  }

  async onSubmit(e){
    e.preventDefault();

    if(this.state.password !== this.state.password2){
      this.props.setAlert('Passwords do not match', 'red');
    } else {
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      }
    }
    
  }

  render() {
    return(
      <div style={{margin: '10em 5em 10em 5em'}}>
        <Message
          attached
          header='Welcome to our site!'
          content='Fill out the form below to sign-up for a new account'
        />
        <Form className='attached fluid segment' onSubmit={this.onSubmit}>
          <Form.Group widths='equal'>
            <Form.Input 
              fluid 
              name='name'
              label='Name' 
              placeholder='Name' 
              type='text' 
              value={this.state.name} 
              onChange={this.onChange} 
            />
          </Form.Group>
          <Form.Input 
            name='email'
            label='Email'
            placeholder='Email' 
            type='text' 
            value={this.state.email} 
            onChange={this.onChange}
          />
          <Form.Input 
            name='password'
            label='Password' 
            type='password' 
            value={this.state.password}
            onChange={this.onChange} 
          />
          <Form.Input 
            name='password2'
            label='ConfirmPassword' 
            type='password' 
            value={this.state.password2}
            onChange={this.onChange} 
          />
          <Form.Checkbox inline label='I agree to the terms and conditions' />
          <Button color='blue'>Submit</Button>
        </Form>
        <Message attached='bottom' warning>
          <Icon name='help' />
          Already signed up?&nbsp;<Link to='/login'>Login here</Link>&nbsp;instead.
        </Message>
      </div>
    )
  }
}

export default connect(null, {setAlert})(RegisterForm);