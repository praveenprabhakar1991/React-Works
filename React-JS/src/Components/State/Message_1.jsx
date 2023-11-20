import React, { Component } from 'react';

class Message extends Component {

   state = {
      Message: "Hello"
   }

   gmHandler = () => {
      this.setState({ Message: "Breakfast Time" })
   }

   gaHandler = () => {
      this.setState({ Message: "Lunch Time" })
   }

   geHandler = () => {
      this.setState({ Message: "Snacks Time" })
   }

   gnHandler = () => {
      this.setState({ Message: "Dinner Time" })
   }
   render() {
      return (
         <>
            <h2>Message : {this.state.Message}</h2>
            <hr />
            <button className="btn btn-outline-success mx-2" onClick={this.gmHandler}>Good Morning</button>
            <button className="btn btn-outline-primary mx-2" onClick={this.gaHandler}>Good Afternoon</button>
            <button className="btn btn-outline-warning mx-2" onClick={this.geHandler}>Good Evening</button>
            <button className="btn btn-outline-danger mx-2" onClick={this.gnHandler}>Good Night</button>
         </>
      );
   }
}

export default Message;