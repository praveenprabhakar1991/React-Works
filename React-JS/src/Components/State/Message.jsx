import React, { Component } from 'react';

class Message extends Component {

   state = {
      Message: "Hello"
   }

   render() {
      return (
         <>
            <div className="container">
               <h2>Message : {this.state.Message}</h2>
               <hr />
               <button className="btn btn-outline-success mx-2"
                  onClick={() => { this.setState({ Message: "It is a Breakfast Time" }) }}>Good Morning</button>
               <button className="btn btn-outline-primary mx-2"
                  onClick={() => { this.setState({ Message: "It is a Lunch Time" }) }}>Good Afternoon</button>
               <button className="btn btn-outline-warning mx-2"
                  onClick={() => { this.setState({ Message: "It is a Snacks Time" }) }}>Good Evening</button>
               <button className="btn btn-outline-danger mx-2"
                  onClick={() => { this.setState({ Message: "It is a Dinner Time" }) }}>Good Night</button>
            </div>
         </>
      );
   }
}

export default Message;