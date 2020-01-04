import React, { Component } from 'react';

class Control extends Component {
  componentWillReceiveProps(nextProps){
    console.log('next',nextProps);
    
  } 
  onClick=(sortBy,sortValue)=>{
   
     this.props.onSort(sortBy,sortValue);
    
   
   
    
  }
  
  render() {
    return (
      <div className="col-6">
        <div className="btn-group">
          <button
          className="btn btn-primary dropdown-toggle"
           id="dropdownMenu"
          type="button"  
           data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"  
           >
            Sắp xếp<span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu"aria labelledby="dropdownMenu1">
            <li onClick={()=>this.onClick('name',1)}> 
            <a role='button'className="sort selected" >
              <span className ="fa-fa-sort-alpha-asc pr-5 ">
                Tên A-Z
              </span>
            </a>
            </li>
            <li onClick={ ()=>this.onClick('name',-1)}>
              <a role="button">
                <span className ="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A 
                </span>
              </a>
            </li>
            <li role ="seperator className="divisor></li>
            <li onClick={()=>this.onClick('status',1)}>
              <a role="button">
                Trang Thai Kich Hoat 
              </a>
            </li>
            <li onClick={ ()=>this.onClick('status',-1)}>
              <a role ="button">
                Trang Thai An 
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Control;
