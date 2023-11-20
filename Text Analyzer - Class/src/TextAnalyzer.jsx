import React, { Component } from 'react'

class TextAnalyzer extends Component {

   state = {
      Text: ""
   }

   onChangeHandler = (event) => {
      this.setState({ Text: event.target.value })
   }

   UpperCaseHandler = () => {
      this.setState({ Text: this.state.Text.toUpperCase() })    
   }

   LowerCaseHandler = () => {
      this.setState({ Text: this.state.Text.toLowerCase() })
   }

   CapitalizeHandler = () => {
      this.setState({ Text: this.state.Text.replace(/\b\w/g, match => match.toUpperCase()) })
   }

   LineRemoverHandler = () => {
      this.setState({ Text: this.state.Text.replace('\n', " ") })
   }

   ClearTextHandler = () => {
      this.setState({ Text: this.state.Text = "" })
   }

   SpaceRemoverHandler = () => {
      this.setState({ Text: this.state.Text.split(" ").filter(word => word !== "").join(" ") })
   }

   render() {
      return <>
         <div className="container mt-5">
            <div className="row">
               <div className="col-md">
                  <div className="form-group">
                     <h2>Type Your Text To Analyze...</h2>
                     <textarea className="form-control" value={this.state.Text} onChange={this.onChangeHandler} rows="8"></textarea>
                  </div>
                  <button disabled={this.state.Text.length === 0} className="btn btn-outline-primary m-2" onClick={this.UpperCaseHandler}>Upper Case</button>
                  <button disabled={this.state.Text.length === 0} className="btn btn-outline-primary m-2" onClick={this.LowerCaseHandler}>Lower Case</button>
                  <button disabled={this.state.Text.length === 0} className="btn btn-outline-primary m-2" onClick={this.CapitalizeHandler}>Capitalize</button>
                  <button disabled={this.state.Text.length === 0} className="btn btn-outline-primary m-2" onClick={this.LineRemoverHandler}>Line Remover</button>
                  <button disabled={this.state.Text.length === 0} className="btn btn-outline-primary m-2" onClick={this.SpaceRemoverHandler}>Space Remover</button>
                  <button disabled={this.state.Text.length === 0} className="btn btn-outline-primary m-2" onClick={this.ClearTextHandler}>Clear Text</button>                  
               </div>
            </div>
            <hr />
            <div>
               <h6>{this.state.Text.split(" ").filter((element) => { return element.length !== 0 }).length} Words & {this.state.Text.length} Characters</h6>
               <h6> {0.008 * this.state.Text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes To Read</h6>
            </div>
         </div>
      </>
   }
}

export default TextAnalyzer