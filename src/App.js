import React from 'react';
import ReactDOM from "react-dom"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  render(){
      return (
        <div>
          <Header />
          <MemeGenerator/>
        </div>
      
      )
    }

}

export default App;
