import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <form>
      <label>
        User Name:
        <input
          type="text"
          {...register('userName')}
          id="userName"
          placeholder="For example: Jacob Mercer"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
      </label>

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
  );
};

export default RegisterPage;
