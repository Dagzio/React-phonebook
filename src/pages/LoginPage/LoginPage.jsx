import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userLogIn } from 'redux/user/userOperations';

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = setState => e => {
    setState(e.target.value);
  };

  const onUserLogIn = () => {
    dispatch(
      userLogIn({
        email,
        password,
      })
    );
    reset({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit(onUserLogIn)}>
      <label>
        Email:
        <input
          type="email"
          {...register('email')}
          onChange={handleChange(setEmail)}
          value={email}
          id="userEmail"
          required
        ></input>
      </label>

      <label>
        Password:
        <input
          type="password"
          {...register('password')}
          onChange={handleChange(setPassword)}
          value={password}
          id="userPassword"
          required
        ></input>
      </label>

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;
