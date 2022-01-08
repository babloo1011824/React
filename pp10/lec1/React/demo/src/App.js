import React from "react";
import "./App.css"
class App extends React.Component{
  state={
    tasks:["abc","deg"],
    currInput:"",
    
  }
  render=()=>{
    return <div>
      <input
      className="input-box"
      type="text"
       onChange={(e)=>{
        this.setState({currInput:e.currentTarget.value});
      }}

      onKeyDown={(e)=>{
        if(e.key=="Enter"){
          this.setState({
            tasks:[...this.state.tasks,this.state.currInput],
            currInput:"",
          });

        }

      }}


      
      
      value={this.state.currInput}
      
      />

      
      <ul>
        {this.state.tasks.map((ele)=>{
          return <li>{ele}</li>

        })}
      </ul>
    </div>
  }





}
export default App;