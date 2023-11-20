import React, { Component } from 'react';

class Message extends Component {

   state = {
      message: "Hello"
   }

   messageHandler = (message) => {
      this.setState({ message: message })
   }

   render() {
      return <>
         <div className="container">
            <h2> Wish Message : {this.state.message} </h2>
            <hr />
            <button className="btn btn-outline-success mx-2" onClick={this.messageHandler.bind(this, "It is Breakfast Time")}>Good Morning</button>
            <button className="btn btn-outline-primary mx-2" onClick={this.messageHandler.bind(this, "It is Lunch Time")}>Good Afternoon</button>
            <button className="btn btn-outline-warning mx-2" onClick={this.messageHandler.bind(this, "It is Snacks Time")}>Good Evening</button>
            <button className="btn btn-outline-danger mx-2" onClick={this.messageHandler.bind(this, "It is Dinner Time")}>Good Night</button>
         </div>
      </>
   }
}

export default Message;