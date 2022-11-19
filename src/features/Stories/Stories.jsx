import { useAuth } from '../../app';
import cls from './Stories.module.scss';

const stories = [
  {
    id: 1,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  },
  {
    id: 2,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  },
  {
    id: 3,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  },
  {
    id: 4,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  },
];

export const Stories = () => {
  const user = useAuth();

  return (
    <div className={cls.stories}>
      <div className={cls.story}>
        <img src={user?.avatar} alt='' />
        <span>{user?.name}</span>
        <button>+</button>
      </div>

      {stories.map((story) => (
        <div className={cls.story} key={story.id}>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
