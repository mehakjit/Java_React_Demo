import logo from './logo.svg';
import './App.css';
import App2 from './App2'
import React from "react"

class App extends React.Component{
  url='http://google.com/'
  constructor(){
    super()
    this.state = {
      userName: '',
      title: "Hello React - 006"
    }
  }
  onClick = ($event)=>{
    console.log("save button is clicked: ", $event);
    window.open(this.url,"_blank")
  }
  onNameChange=(event)=>{
    console.log("Value is",event.target.value)
    this.setState({userName: event.target.value})
  }
  render (){
    return <div><h1>{this.state.title}</h1>
    <h1>Hello &rarr; {this.state.userName} &larr; user dynamically changes</h1>
    <img src = {logo} onClick={this.onClick} width="100px"></img>
      <App2></App2>
      <div className="text-box">
          <input onChange={this.onNameChange}/>
      </div>
    </div>
  }
}

export default App;
