import React from "react";
import Paginator from "../common/paginator/paginator";
import User from "./User";

let Users = ({
  currentPage,
  onPageChanged,
  pageSize,
  totalUsersCount,
  users,
  ...props
}) => {
  //   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  //   let pages = [];
  //   for (let i = 1; i <= pagesCount; i++) {
  //     pages.push(i);
  //   }

  return (
    <div>
      {/* <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div> */}
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
