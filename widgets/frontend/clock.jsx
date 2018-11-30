import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ time: new Date() });

    this.tick = this.tick.bind(this);
    this.currentTime = this.currentTime.bind(this);
  }

  tick() {
    const newTime = new Date();
    this.setState({ time: newTime });
  }

  currentTime() {
    return this.state.time.toLocaleTimeString();
  }

  currentDate() {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return this.state.time.toLocaleDateString('en-US', options);
  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    return (
      <div className="date-container">

        <div className="date-time">
          <span>Time:</span>
          <span>{this.currentTime()}</span>
        </div>

        <div className="date-time">
          <span>Date:</span>
          <span>{this.currentDate()}</span>
        </div>

      </div>
    );
  }
}

export default Clock;
