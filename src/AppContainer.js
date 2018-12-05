import React, { Component } from 'react';
import './AppContainer.css';
import ReactTrix from './ReactTrix';
import OutputView from './OutputView';


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "",
      outputtext : ''
    }
  }
  sendData = (event, html) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if(event.ctrlKey && charCode === 's') {
      event.preventDefault();
      console.log("Ctrl + S pressed");
      this.saveData()
    }
   
  }
  update() {
    this.saveData();
    
    this.setState({outputtext: localStorage.getItem("data")});
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  saveData = (event) => {
    localStorage.setItem("data", this.state.text);
    //this.setState({outputtext : this.state.text});
  }
  handleChange = (html, text) => {
    //console.log('APP TEXT'+html);
    this.setState({text : html});
  }
  render() {
    return (
      <div >
        <div  className="trix-container">
          <ReactTrix
          handleChange = {this.handleChange} 
          sendData = {this.sendData}
          saveData = {this.saveData}
       />
        </div>
        <div className="output-container">
        <OutputView text = {this.state.outputtext}/>
          </div>
      </div>
    );
  }
}

export default AppContainer;
