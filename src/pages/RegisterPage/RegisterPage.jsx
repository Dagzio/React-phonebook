import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userSignUp } from 'redux/user/userOperations';
import {
  RegisterForm,
  SignUp,
  UserEmail,
  UserName,
  UserPassword,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = setState => e => {
    setState(e.target.value);
  };

  const onUserFormSubmit = () => {
    dispatch(userSignUp({ name, email, password }));
    reset({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onUserFormSubmit)}>
      <label>
        User Name:
        <UserName
          type="text"
          {...register('name')}
          onChange={handleChange(setName)}
          value={name}
          id="userName"
          placeholder="For example: Jacob Mercer"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></UserName>
      </label>

      <label>
        Email:
        <UserEmail
          type="email"
          {...register('email')}
          onChange={handleChange(setEmail)}
          value={email}
          id="userEmail"
          required
        ></UserEmail>
      </label>

      <label>
        Password:
        <UserPassword
          type="password"
          {...register('password')}
          onChange={handleChange(setPassword)}
          value={password}
          id="userPassword"
          required
        ></UserPassword>
      </label>

      <SignUp type="submit">Sign Up</SignUp>
    </RegisterForm>
  );
};

export default RegisterPage;
