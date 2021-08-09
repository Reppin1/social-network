import React from 'react';

class ProfileStatus extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    setTimeout(this.props.updateStatus(this.state.status), 4000);
  }

  onchangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode && (
          <div>
            <span onDoubleClick={
              this.activateEditMode
            }
            >
              {this.props.status || '----'}
            </span>
          </div>
          )
        }
        {this.state.editMode
      && (
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <input type="text" onChange={this.onchangeStatus} autoFocus onBlur={this.deactivateEditMode} placeholder="Set status" value={this.state.status} />
      </div>
      )}
      </div>
    );
  }
}

export { ProfileStatus };
