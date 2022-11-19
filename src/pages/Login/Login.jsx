import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userActions } from '../../app';
import { Button, ButtonSize } from '../../shared';

import cls from './Login.module.scss';

export const Login = memo(() => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    userActions.login();
    toast('Successfully login');
    navigate('/');
  };

  return (
    <div className={cls.login}>
      <div className={cls.card}>
        <div className={cls.left}>
          <h1>Hello World.</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam
            ipsa exercitationem dignissimos, error nam, consequatur.
          </p>
          <span>Don't you have an account?</span>

          <Link to='/register'>
            <Button size={ButtonSize.L}>Register</Button>
          </Link>
        </div>

        <div className={cls.right}>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <Button size={ButtonSize.L}>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
});
