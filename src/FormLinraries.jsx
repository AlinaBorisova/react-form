import _ from './Form.module.css';
import {useForm} from 'react-hook-form';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={_.wrap}>
        <label className={_.label} htmlFor='email'>Email</label>
        <input
          {...register('email', {
            required: {
              value: true,
              message: 'Enter your email',
            },
            pattern: {
              value: /^.+@.+\..+$/,
              message: 'Incorrect email'
            }
          })}
          className={_.input}
          id='email'
          type='text'
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className={_.error}>{errors.email.message}</p>}
      </div>

      <div className={_.wrap}>
        <label className={_.label} htmlFor='password'>Password</label>
        <input
          {...register('password', {
            required: {
              value: true,
              message: 'Enter your password',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
              message: 'Incorrect password',
            }
          })}
          className={_.input}
          id='password'
          type='password'
          aria-invalid={!!errors.password}
        />
        {errors.password && <p className={_.error}>{errors.password.message}</p>}
      </div>

      <div className={_.wrapCheckbox}>
        <input
          {...register('save')}
          className={_.checkbox}
          id='save'
          type='checkbox'
        />
        <label className={_.labelCheckbox} htmlFor='save'>Save password</label>
      </div>

      <button className={_.submit} type='submit'>Sign in</button>
    </form>
  );
};
