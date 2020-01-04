import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      keyword:''
    }
    
  }
  onChange=(e)=>{
    var name=e.target.name;
    var value=e.target.value;
    this.setState({
      [name]:value
    });
  }
  onSearch=()=>{
    this.props.onSearch(this.state.keyword)
  }
 
  render(){
    var {keyword}=this.state;
  return (
    
    <div className="col-6">
      <div className="input-group">
        <input 
        name="keyword"
        type="text" 
        className="form-control"
        value={keyword}
        onChange={this.onChange} 

         />
        <div className="input-group-append">
          <button 
          onClick={this.onSearch}
          className="btn btn-outline-secondary" 
          type="button"> <i className="fas fa-search"></i> Search</button>
        </div>
      </div>
    </div>
    
    
  );
}
}
export default Search;
