import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../shared';

import cls from './Register.module.scss';

export const Register = memo(() => {
  return (
    <div className={cls.register}>
      <div className={cls.card}>
        <div className={cls.left}>
          <h1>Hello World.</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam
            ipsa exercitationem dignissimos, error nam, consequatur.
          </p>
          <span>Don't you have an account?</span>

          <Link to='/login'>
            <Button size={ButtonSize.L}>Login</Button>
          </Link>
        </div>

        <div className={cls.right}>
          <h1>Register</h1>

          <form>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='text' placeholder='Name' />
            <Button size={ButtonSize.L}>Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
});
