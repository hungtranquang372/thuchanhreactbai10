import React, { Component } from 'react';
import Search from './Seach'
import Sort from './Sort'
class Control extends Component {
  render(){
  return (
    
    <div className="row mt-3">
      
      <Search onSearch={this.props.onSearch}/>
      <Sort onSort={this.props.onSort}/>
           
            
      
  </div>
    
    
  );
}
}
export default Control;
