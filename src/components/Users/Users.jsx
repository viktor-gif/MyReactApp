import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg"

const Users = (props) => {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      
      props.setUsers(response.data.items);
    });

//     props.setUsers([
//             {
//                 id: 1,
//                 photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
//                 followed: false,
//                 fullName: 'Dmitry',
//                 status: 'I am a boss',
//                 location: {city: 'Minsk', country: 'Belarus'}
//             },
//             {
//                 id: 2,
//                 photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
//                 followed: true,
//                 fullName: 'Sasha',
//                 status: 'I am a boss too',
//                 location: {city: 'Moscow', country: 'Russia'}
//             },
//             {
//                 id: 3,
//                 photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
//                 followed: false,
//                 fullName: 'Andrew',
//                 status: 'I am a boss too',
//                 location: {city: 'Kiev', country: 'Ukraine'}
//             }
//         ]
//     )
}

  return <div>
      {
      props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small: userPhoto} className={s.userPhoto} />
            </div>
            <div>
              {u.followed 
              ? <button onClick={() => {
                  props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(u.id)
              }}>Follow</button>}
                    
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </span>
        </div>)
      }
    </div>
    }

export default Users;    