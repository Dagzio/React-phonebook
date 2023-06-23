import { useForm } from 'react-hook-form';

const LoginPage =() => {
    const { register, handleSubmit, reset } = useForm();

    return  <form>
    <label>
      Email:
      <input
        type="email"
        {...register('userEmail')}
        id="userEmail"
        required
      ></input>
    </label>

    <label>
      Password:
      <input
        type="password"
        {...register('userPassword')}
        id="userPassword"
        required
      ></input>
    </label>
  </form>
}

export default LoginPage;