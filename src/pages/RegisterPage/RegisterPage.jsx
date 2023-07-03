import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userSignUp } from 'redux/user/userOperations';

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
    <form onSubmit={handleSubmit(onUserFormSubmit)}>
      <label>
        User Name:
        <input
          type="text"
          {...register('name')}
          onChange={handleChange(setName)}
          value={name}
          id="userName"
          placeholder="For example: Jacob Mercer"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
      </label>

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

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterPage;
