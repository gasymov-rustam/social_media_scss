import cls from './RightBar.module.scss';

const img =
  'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600';
const alt = 'Error';
const fakeArr = new Array(11).fill(0).map((_, idx) => idx);

export const RightBar = () => {
  return (
    <div className={cls.rightBar}>
      <div className={cls.container}>
        <div className={cls.item}>
          <span>Suggestions For You</span>

          {[0, 1].map((item) => (
            <div className={cls.user} key={item}>
              <div className={cls.userInfo}>
                <img src={img} alt={alt} width={40} height={40} decoding='async' loading='lazy' />
                <span>Jane Doe</span>
              </div>

              <div className={cls.buttons}>
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          ))}
        </div>

        <div className={cls.item}>
          <span>Latest Activities</span>

          {[0, 1, 2, 3].map((item) => (
            <div className={cls.user} key={item}>
              <div className={cls.userInfo}>
                <img src={img} alt={alt} width={40} height={40} decoding='async' loading='lazy' />
                <p>
                  <span>Jane Doe</span> changed their cover picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
          ))}
        </div>

        <div className={cls.item}>
          <span>Online Friends</span>

          {fakeArr.map((item) => (
            <div className={cls.user} key={item}>
              <div className={cls.user}>
                <img src={img} alt={alt} width={40} height={40} decoding='async' loading='lazy' />
                <div className={cls.online} />
                <span>Jane Doe</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
