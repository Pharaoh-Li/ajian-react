import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// 邮局
// // 发布订阅
// class DataSource {
//   constructor() {
//     // 订阅者
//     this.listeners = []
//   }
//   // 订报纸
//   addChangeListener(callback) {
//     this.listeners.push(callback)
//   }

//   //
//   removeChangeListener(callback) {
//     const index = this.listeners.indexOf(callback)
//     this.listeners.splice(index, 1)
//   }

//   // 发布消息 送报纸
//   publish(data) {

//     for (let i = 0; i < this.listeners.length; i++) {
//       const listener = this.listeners[i]
//       listener(data)
//     }

//   }
// }

// const dataSource = new DataSource()

// dataSource.addChangeListener((data) => {
//   console.log('Mike', data);
// })

// dataSource.addChangeListener((data) => {
//   console.log('Jack', data);
// })

// dataSource.publish('NBA')