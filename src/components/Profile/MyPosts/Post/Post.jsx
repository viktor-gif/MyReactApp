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
        <img src="https://w7.pngwing.com/pngs/245/299/png-transparent-heart-others-love-heart-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%87%D0%BA%D0%BE-thumbnail.png" />
      </button>
    </div>
    </div>
  )

}

export default Post;