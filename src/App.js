import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar'; 
import Newscomp from './component/Newscomp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
          <Navbar />
          <Routes>
            <Route path="/" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general"/>} />
            <Route path="/top-headlines" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="top headlines" category="top headlines"/>} />
            <Route path="/business" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business"/>} />
            <Route path="/health" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health"/>} />
            <Route path="/sports" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports"/>} />
            <Route path="/technology" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology"/>} />
            <Route path="/social" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="social" category="social"/>} />
            <Route path="/education" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="education" category="education"/>} />
            <Route path="/travelling" element={<Newscomp apiKey={this.apiKey} setProgress={this.setProgress} key="travelling" category="travelling"/>} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
