import React, { Component } from 'react';
import TaskItem from './TaskItem'
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state={
      filterName:'',
      filterStatus:-1
    }
   
  }
  onChange=(e)=>{
    var name=e.target.name;
    var value=e.target.value;
    var filter={
      name:name==="filterName"?value:this.state.filterName,
      status:name==="filterStatus"?value:this.state.filterStatus
    }
    this.props.onFilter(filter)
    this.setState({
      [name]:value
    })
  }
 

  render() {
    var {filterName,filterStatus}=this.state;
    var { tasks } = this.props;
     console.log("tasks",tasks);
    
    
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem
        key={task.id}
        index={index}
        task={task}
        onUpdateStastus={this.props.onUpdateStastus}
        onDelete={this.props.onDelete}
        onUpdate={this.props.onUpdate}
      />
    })
    return (
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th ></th>
              <td> <input 
              type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.onChange}
               
              ></input> </td>
              <td>
                <select
                  className="form-control"
                  name="filterStatus"
                  value={filterStatus}
                  onChange={this.onChange}
                   
                >
                  <option value={-1}>Tất cả</option>
                  <option value={0}>Ẩn</option>
                  <option value={1}>Kich hoat</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTasks}

          </tbody>
        </table>
      </div>



    );
  }
}
export default TaskList;
