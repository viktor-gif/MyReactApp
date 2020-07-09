import React from "react";
import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

  let friendsElements = props.friends
    .map ( f => <FriendItem id={f.id} fullName={f.fullName} image={f.image} />);
    

  return (
    <div className={s.myFriends}>
      <h2>My friends</h2>
      <div className={s.friendsInfo}>
        <div className={s.friendsCount}>25<br/>friends</div>
        <div className={s.findFrieds}>To find<br/>friends</div>
      </div>

      <div className={s.friends}>
      { friendsElements }
      </div>
    </div>
  );
};

export default Friends;
