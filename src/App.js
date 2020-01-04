import React, { Component } from 'react';
import "./App.css";
import {Route,Switch} from 'react-router-dom';
import TaskForm from './components/TaskForm'
import Control from './components/Control';
import TaskList from './components/TaskList'
import randomstring from 'randomstring'
import Navbar from './pages/Navbar';
import {createClient} from 'contentful'
var client = createClient({
    space:"brq3jysa9lrm",
    accessToken:"f7DzMxZHwGxfimYnaAKJRt32ePr5RePVJ8h_wtXZt_A"
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: true,
      taskEditing: null,
     filter:{
       name:'',
       status:-1
     },
      keyword:'',
      sortBy:'name',
      sortValue:1
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }
componentDidMount(){
  client.getEntries({
    content_type: "thuchanhreactbai10",
  })
  .then(res=>{
    console.log(res);
    let array = res.items.map(value => {
      return {
        id: value.sys.id,
        ...value.fields
      }
    });
    this.setState({
      tasks:array
    })

    
  })
}
  onGenerate = () => {
    var tasks = [
      {
        id: randomstring.generate({
          length: 12,
          charset: 'numeric'
        }),
        name: 'hoc lap trinh',
        status: false
      },
      {
        id: randomstring.generate({
          length: 12,
          charset: 'numeric'
        }),
        name: 'di boi',
        status: false
      },
      {
        id: randomstring.generate({
          length: 12,
          charset: 'numeric'
        }),
        name: 'di ngu',
        status: false
      }
    ];
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }
  onShowForm() {
    this.setState({
      isDisplayForm: true
    })
  }
  onSubmit = (data) => {

    var { tasks } = this.state;
    if (data.id === '') {
      data.id = randomstring.generate({
        length: 12,
        charset: 'numeric',
      })
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }


    //  data.id= randomstring.generate({
    //   length: 12,
    //   charset: 'numeric'
    // }),

    this.setState({
      tasks: tasks,
      taskEditing: null
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))

  }
  onUpdateStastus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1)
      tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
   findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    

    this.setState({
      taskEditing: taskEditing
    })
    console.log("taskEditing",taskEditing);
    // this.onShowForm();
  }
 
  onSearch=(keyword)=>{
    // console.log(keyword);
    this.setState({
      keyword:keyword
    })
  }
   onFilter=(filter)=>{
    filter.status=parseInt(filter.status)
     
     this.setState({
       filter:{
         name:filter.name.toLowerCase(),
         status:filter.status
         }
     })
   } 
   onSort=(sortBy,sortValue)=>{
    
     this.setState({
      
        sortBy:sortBy,
        sortValue:sortValue
       
     })
     

   }
  
    
    
  render() {
    var { tasks, isDisplayForm, taskEditing, filter,keyword,sortBy,sortValue } = this.state;
    
    
      if(keyword){
      tasks=tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(keyword)!==-1
      })
    }
     if(filter){
       if(filter.name){
         tasks=tasks.filter((task)=>{
           return task.name.toLowerCase().indexOf(filter.name)!==-1
         }
         )
       }
       tasks=tasks.filter((task)=>{
         
         
         
         if(filter.status===-1){
           return task
         }
         else{
           return task.status===(filter.status===1?true:false);
         }
       });
     }
     if(sortBy==='name'){
       tasks.sort((a,b)=>{
        if(a.name>b.name)return sortValue;
      
        else if(a.name<b.name) return -sortValue;
        else return 0;
        
       });
      
      }else{
         tasks.sort((a,b)=>{
           if(a.status>b.status) return sortValue;
           else if(a.status<b.status)return -sortValue;
           else return 0;
         });
       }
     
    

    var elmTasform = isDisplayForm ?
      <TaskForm onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        task={taskEditing}
      /> : '';
      console.log(sortBy,sortValue);
      
    return (

      <div>
        
       
        {/* <Switch>
        <Route path='/' exact component={App}/>
        <Route path='/taskform' exact component={TaskForm}/>
       
        <Route path='/error' component={Error}/>
        <Route  component={Error}/>
     </Switch> */}
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={isDisplayForm ? "col-4" : ''}>
              {/* Form */}
              {elmTasform}
            </div>
            <div className={isDisplayForm ? "col-8" : "col-12"}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onToggleForm}
              >Thêm Công Việc  </button>
              <button 
              type="button" 
              className="btn btn-danger"
               onClick={this.onGenerate}>Generate</button>
             
              
              {/* Seach Sort */}

              <Control 
              onSearch={this.onSearch}
              onSort={this.onSort}
             
              />
              {/* List */}
              <TaskList
                tasks={tasks}
                onUpdateStastus={this.onUpdateStastus}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter}
               
              />

            </div>

          </div>
        </div>
        
      </div>


    );
  }
}
export default App;
