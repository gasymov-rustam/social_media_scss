import { memo, useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import cls from './Post.module.scss';
import { Comments } from '../../../Comments';

export const Post = memo(({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = true;

  return (
    <div className={cls.post}>
      <div className={cls.container}>
        <div className={cls.user}>
          <div className={cls.userInfo}>
            <img src={post.profilePic} alt='Error' />

            <div className={cls.details}>
              <Link to={`/profile/${post.userId}`}>
                <span className={cls.name}>{post.name}</span>
              </Link>

              <span className={cls.date}>1 min ago</span>
            </div>
          </div>

          <MoreHorizIcon />
        </div>

        <div className={cls.content}>
          <p>{post.desc}</p>
          <img src={post.img} alt='' />
        </div>

        <div className={cls.info}>
          <div className={cls.item}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>

          <div className={cls.item} onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>

          <div className={cls.item}>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
});
