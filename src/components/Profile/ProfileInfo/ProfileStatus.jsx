import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {
        !editMode && (
          <div>
            <span onDoubleClick={
              activateEditMode
            }
            >
              {status || '----'}
            </span>
          </div>
        )
      }
      {editMode
      && (
        <div>
          <input
            type="text"
            onChange={onChangeStatus}
            onBlur={deactivateEditMode}
            placeholder="Set status"
            /* eslint-disable-next-line jsx-a11y/no-autofocus */
            autoFocus
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export { ProfileStatus };
