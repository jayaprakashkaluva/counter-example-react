import React from 'react';
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
  
    increment(event) {
      this.setState(state => ({
        count : state.count+1
      }));
    }  

    decrement(event) {
      this.setState(state => ({
        count : state.count-1
      }));
    }  
  
    render() {
      return (
        <div>
        <span>Count is {this.state.count}</span>
        <button onClick={this.increment}>
          Increment
        </button>
          <button onClick={this.decrement}>
          Decrement
        </button>
        </div>
      );
    }
  }
  export default Counter