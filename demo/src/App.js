// import './App.css';
import ContextDemo from "./pages/ContextDemo/ContextDemo";
import ContextDemo1 from "./pages/ContextDemo/Test01";
import ContextDemo2 from "./pages/ContextDemo/Test02";
import ContextDemo3 from "./pages/ContextDemo/Test03";
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary />
    </div>
  );
}
// import React, { Component, memo } from 'react';

// class Child extends Component {
//   constructor(props) {
//     super(props)
//     console.log('Child constructor');
//   }

//   componentDidMount() {
//     console.log('Child componentDidMount');
//   }

//   componentWillMount() {
//     console.log('Child componentWillMount');
//   }

//   componentWillUpdate() {
//     console.log('Child componentWillUpdate');
//   }

//   componentDidUpdate() {
//     console.log('Child componentDidUpdate');
//   }

//   render() {
//     console.log('Child render');
//     return <div>Child</div>
//   }
// }

// const MemoChild = memo(Child)

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       num: 0,
//       num2: 0
//     }
//     console.log('APP constructor');
//   }

//   componentDidMount() {
//     console.log('APP componentDidMount');
//   }

//   componentWillMount() {
//     console.log('APP componentWillMount');
//   }

//   componentWillUpdate() {
//     console.log('APP componentWillUpdate');
//   }

//   componentDidUpdate() {
//     console.log('APP componentDidUpdate');
//   }

//   render() {
//     console.log('App render');
//     const { num, num2 } = this.state
//     return <div>
//       App
//       <button onClick={() => {
//         this.setState({
//           num2: num2 + 1
//         })
//       }}>+</button>
//       {num2}
//       <MemoChild num={num} />
//     </div>
//   }
// }

export default App;
