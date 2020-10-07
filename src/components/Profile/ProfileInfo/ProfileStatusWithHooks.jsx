import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditeMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditeMode(true);
  };
  const deactivateEditMode = () => {
    setEditeMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <b>Status</b>:{" "}
          <span onDoubleClick={activateEditMode}>
            {props.status || "--------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
