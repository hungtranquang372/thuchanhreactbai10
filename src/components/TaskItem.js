import React, { Component } from 'react';

class TaskItem extends Component {
  onUpdateStastus = () => {
    // console.log(this.props.task.id);
    this.props.onUpdateStastus(this.props.task.id)

  }
  onDelete = () => {
    this.props.onDelete(this.props.task.id)
  }
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id)
  }
  render() {
    var { task, index } = this.props;
    return (

      <tr>
        <th >{index + 1}</th>
        <td>{task.name}</td>
        <td><span
          className={task.status ? "badge badge-danger" : "badge badge-success"}
          onClick={this.onUpdateStastus}
        >{task.status ? "Kích Hoạt" : "Ẩn"}

        </span></td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onUpdate}

          >Sửa</button>
          &nbsp;

        <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >Xóa</button>
        </td>

      </tr>
    );
  }
}
export default TaskItem;