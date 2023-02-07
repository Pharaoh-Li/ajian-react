// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       App
//     </div>
//   );
// }
import React, { Component } from 'react';

class Child extends Component {
  render() {
    return <div>Child</div>
  }
}

class App extends Component {
  render() {
    return <div>
      App
      <Child />
    </div>
  }
}

export default App;
