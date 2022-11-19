import { useAuth } from '../../app';
import { otherMenu, userMenu } from './config';
import cls from './LeftBar.module.scss';

export const LeftBar = () => {
  const user = useAuth();

  return (
    <div className={cls.leftBar}>
      <div className={cls.container}>
        <div className={cls.menu}>
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
          </div>

          {userMenu.map((item) => (
            <div className={cls.item} key={item.text}>
              <img
                src={item.img}
                alt={item.alt}
                width={30}
                height={30}
                decoding='async'
                loading='lazy'
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className={cls.menu}>
          <span>Your shortcuts</span>

          {otherMenu.map((item) => (
            <div className={cls.item} key={item.text}>
              <img
                src={item.img}
                alt={item.alt}
                width={30}
                height={30}
                decoding='async'
                loading='lazy'
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className={cls.menu}>
          <span>Others</span>

          {otherMenu.map((item) => (
            <div className={cls.item} key={item.text}>
              <img
                src={item.img}
                alt={item.alt}
                width={30}
                height={30}
                decoding='async'
                loading='lazy'
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
