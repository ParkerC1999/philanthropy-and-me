import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { SignupContainer, H2, Form, Div, Button, Input } from './UpStyles';
import Fade from "react-reveal/Fade";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username
      },
    });
    const token = mutationResponse.data.addUser.token;
    auth.signup(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <SignupContainer className="container my-1">
      <Link to="/login">Login</Link>
      <Fade right>
        <H2>Change the World</H2>
      </Fade>
      <Form onSubmit={handleFormSubmit}>
        <Div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <Input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </Div>
        <Div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <Input
            placeholder="youremail@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </Div>
        <Div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <Input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </Div>
        <Div className="flex-row flex-end">
          <Button type="submit">Be the change!</Button>
        </Div>
      </Form>
    </SignupContainer>
  );
}

export default Signup;
