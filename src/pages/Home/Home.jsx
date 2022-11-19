import { memo } from 'react';
import { Posts } from '../../features/Posts';
import { Stories } from '../../features/Stories';

import cls from './Home.module.scss';

export const Home = memo((props) => {
  return (
    <div className={cls.home}>
      <Stories />
      <Posts />
    </div>
  );
});
