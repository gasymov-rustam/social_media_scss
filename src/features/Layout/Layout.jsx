import { LeftBar } from '../../widgets/LeftBar';
import { RightBar } from '../../widgets/RightBar';
import { Navbar } from '../../widgets/Navbar';
import { Outlet } from 'react-router-dom';
import cls from './Layout.module.scss';

export const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className={cls.layout}>
        <LeftBar />

        <div className={cls.main}>
          <Outlet />
        </div>

        <RightBar />
      </div>
    </div>
  );
};
