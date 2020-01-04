import React, { Component } from 'react';



class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:'',
      name:'',
      status: false,
    }
  }
  // componentWillMount(){
  //   console.log('componentwillmount');
    
  //   if(this.props.taskEditing){
  //     this.setState({
  //       id:this.props.task.id,
  //       name:this.props.task.name,
  //       status:this.props.task.status
  //     }
  //       )
  //   }
  // }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.task){
      this.setState({
        id:nextProps.task.id,
        name:nextProps.task.name,
        status:nextProps.task.status
      })
    }
  }
  onClear=()=>{
    this.setState({
      id:'',
      name:'',
      status:false
    })
  }
  onSubmit=(e)=>{
   
  e.preventDefault();
   this.props.onSubmit(this.state)
    this.onClear();
  }
  onChange=(e)=>{
var target= e.target;
var name =target.name;
var value= target.value;
if(name==='status'){
  value=target.value==='true'?true:false;
}
this.setState({
  [name]:value
})

  }
  onCloseForm=()=>{
    this.props.onCloseForm()
  }
  render(){
    var{id}= this.state;
  return (
    <div className="card">
    <div className="card-header">
      <h3 className="card-title">
      {id!=='' ? 'Cập nhật công việc':'Thêm công việc'} <i className="far fa-times-circle" onClick={this.onCloseForm}></i>
      </h3>
    </div>
    <div className="card-body">
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label >Tên</label>
          <input 
          type="text" 
          className="form-control"
          name='name'
          value={this.state.name}
          onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label >Trang Thái</label>
          <select 
          className="form-control"
          name="status"
          value={this.state.status}
          onChange={this.onChange}
           >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
            
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success mr-2 m-l2">Lưu</button>
          <button type="button" className="btn btn-danger">Xóa</button>
        </div>
    </form>
    </div>
    </div>
  );
}
}
export default TaskForm;
