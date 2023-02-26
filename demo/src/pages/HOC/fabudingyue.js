import React, { Component } from 'react'

export default class Fabudingyue extends Component {
  render() {
    return (
      <div>fabudingyue</div>
    )
  }
}

// 邮局
class DataSource {
  constructor() {
    // 订阅者
    this.listeners = []
  }
  // 订报纸
  addChangeListener(callback) {
    this.listeners.push(callback)
  }
  // 取消订阅
  removeChangeListener(callback) {
    const index = this.listeners.indexOf(callback)
    this.listeners.splice(index, 1)
  }
  // 发布消息 送报纸
  publish(data) {
    for (let i = 0; i < this.listeners.length; i++) {
      const listener = this.listeners[i]
      listener(data)
    }
  }
}

const dataSource = new DataSource()

dataSource.addChangeListener((data) => {
  console.log('Mike', data);
})

dataSource.addChangeListener((data) => {
  console.log('Jack', data);
})

dataSource.publish('NBA')