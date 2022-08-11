import React from "react";
import ElapsedTime from "../elapsed";
import Buttons from "../button";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timingEvents: [],
      nonce: 0
    };
    this.addTimerEvent = this.addTimerEvent.bind(this);
    this.removeTimerEvent = this.removeTimerEvent.bind(this);
    this.tick = this.tick.bind(this);
    this.poll = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState(prevState => ({ nonce: prevState.nonce + 1 }));
  }

  addTimerEvent() {
    this.setState({
      timingEvents: [...this.state.timingEvents, new Date()]
    });
  }

  removeTimerEvent() {
    this.setState({
      timingEvents: []
    });
  }

  render() {
    return (
      <div className="container">
        <ElapsedTime timingEvents={this.state.timingEvents} />
        <Buttons
          startTimer={this.addTimerEvent}
          stopTimer={this.removeTimerEvent}
          timingEvents={this.state.timingEvents}
        />
      </div>
    );
  }
}

export default Timer;
