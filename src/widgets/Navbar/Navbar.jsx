import cls from './Navbar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { toast } from 'react-toastify';
import { Button, ButtonSize, ButtonTheme } from '../../shared';
import { useAuth, userActions } from '../../app';

export const Navbar = () => {
  const user = useAuth();

  const logOut = () => {
    userActions.logout();
    toast('success logout');
  };

  return (
    <div className={cls.navbar}>
      <div className={cls.left}>
        <Link to='/'>
          <span>rustam app</span>
        </Link>

        <HomeOutlinedIcon />
        <ThemeSwitcher />
        <GridViewOutlinedIcon />

        <div className={cls.search}>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search...' />
        </div>
      </div>

      <div className={cls.right}>
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        <div className={cls.user}>
          <img
            src={user?.avatar}
            alt='Error'
            width={30}
            height={30}
            decoding='async'
            loading='lazy'
            className='img'
          />
          <span>{user?.username}</span>

          <Button size={ButtonSize.S} theme={ButtonTheme.FILL} onClick={logOut}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};
