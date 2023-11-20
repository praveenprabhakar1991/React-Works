import React from 'react'
class Digital_Clock extends React.Component {

  state = {
    Current_time: new Date().toLocaleTimeString(),
    Current_date: new Date().toLocaleDateString()
  }

  componentDidMount() {    
    setInterval(() => {
      this.setState({ Current_time: new Date().toLocaleTimeString() })
    }, 1000)
  }

  render() {
    return <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">
              <h2>Digital Clock</h2>
            </div>
            <div className="card-body">
              <h4>{this.state.Current_date}</h4>
              <h3>{this.state.Current_time}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default Digital_Clock