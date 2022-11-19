import { memo } from 'react';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Posts } from '../../features/Posts';
import cls from './Profile.module.scss';

export const Profile = memo(() => {
  return (
    <div className={cls.profile}>
      <div className={cls.images}>
        <img
          src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Error'
          className={cls.cover}
        />

        <img
          src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
          alt='Error'
          className={cls.profilePic}
        />
      </div>
      <div className={cls.profileContainer}>
        <div className={cls.uInfo}>
          <div className={cls.left}>
            <a href='http://facebook.com'>
              <FacebookTwoToneIcon fontSize='large' />
            </a>

            <a href='http://facebook.com'>
              <InstagramIcon fontSize='large' />
            </a>

            <a href='http://facebook.com'>
              <TwitterIcon fontSize='large' />
            </a>

            <a href='http://facebook.com'>
              <LinkedInIcon fontSize='large' />
            </a>

            <a href='http://facebook.com'>
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className={cls.center}>
            <span>Jane Doe</span>

            <div className={cls.info}>
              <div className={cls.item}>
                <PlaceIcon />
                <span>Israel</span>
              </div>

              <div className={cls.item}>
                <LanguageIcon />
                <span>rustam.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>

          <div className={cls.right}>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>

        <Posts />
      </div>
    </div>
  );
});
