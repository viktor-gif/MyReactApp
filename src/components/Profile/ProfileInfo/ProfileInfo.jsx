import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  // // let contacts = props.profile.contacts;
  // for (let i=0; i <=contacts.length; i++) {

  // }
  
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div> */}
      <div className={s.info}>
        <img src={props.profile.photos.large} />

        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

        <div>Имя: {props.profile.fullName}</div>
        <div>Обо мне: {props.profile.aboutMe}</div>
        <div>Поиск работы: {props.profile.lookingForAJob}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>Контакты:
          <div className={s.contacts}>facebook: {props.profile.contacts.facebook}</div>
          <div className={s.contacts}>website: {props.profile.contacts.website}</div>
          <div className={s.contacts}>vk: {props.profile.contacts.vk}</div>
          <div className={s.contacts}>twitter: {props.profile.contacts.twitter}</div>
          <div className={s.contacts}>instagram: {props.profile.contacts.instagram}</div>
          <div className={s.contacts}>youtube: {props.profile.contacts.youtube}</div>
          <div className={s.contacts}>github: {props.profile.contacts.github}</div>
          <div className={s.contacts}>mainLink: {props.profile.contacts.mainLink}</div>
        </div>      
      </div>
    </div>
  )
}

export default ProfileInfo;