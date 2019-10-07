import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm';
import Counter from './counter';

class  App extends React.Component {
  constructor(props) {
super(props);
this.state = {userName : props.name};
  }
render() {
  return <div className="App">
  <Counter></Counter>
    </div>;
}
}

export default App;
