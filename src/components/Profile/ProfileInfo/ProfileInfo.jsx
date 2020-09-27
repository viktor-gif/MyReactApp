import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.info}>
        <img src={profile.photos.large} />

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        <div>Имя: {profile.fullName}</div>
        <div>Обо мне: {profile.aboutMe}</div>
        <div>Поиск работы: {profile.lookingForAJob}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <div>
          Контакты:
          <div className={s.contacts}>
            facebook: {profile.contacts.facebook}
          </div>
          <div className={s.contacts}>website: {profile.contacts.website}</div>
          <div className={s.contacts}>vk: {profile.contacts.vk}</div>
          <div className={s.contacts}>twitter: {profile.contacts.twitter}</div>
          <div className={s.contacts}>
            instagram: {profile.contacts.instagram}
          </div>
          <div className={s.contacts}>youtube: {profile.contacts.youtube}</div>
          <div className={s.contacts}>github: {profile.contacts.github}</div>
          <div className={s.contacts}>
            mainLink: {profile.contacts.mainLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
