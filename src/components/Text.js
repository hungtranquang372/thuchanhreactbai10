import React, { Component } from 'react'

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state={
            vi:{
                name:"Thanh Hang"
            }
        }
        
    }
    
    render() {
        console.log("thu",this.state.vi.name);  
        
        return (
            <div>
                
            </div>
        )
    }
}
