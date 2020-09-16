import React from 'react';
import s from './Post.module.css';


const Post = (props) => {


  return (
    <div className={s.item}>
      <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
      { props.message }
      <div className={s.item}>
      <span>like </span>{ props.likesCount }
      <button>
        <img src="https://www.clipartkey.com/mpngs/m/278-2785465_heart-clipart-jpeg-red-heart-emoji-png.png" />
      </button>
    </div>
    </div>
  )

}

export default Post;