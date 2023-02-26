import React, { Component } from 'react'

// 邮局
class DataSource {
  constructor() {
    this.data = ''
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
    this.data = data
    for (let i = 0; i < this.listeners.length; i++) {
      const listener = this.listeners[i]
      listener(data)
    }
  }
  // 主动获取最新data
  getData() {
    return this.data
  }
}


export default class ComentList extends Component {
  constructor() {
    super()
    this.state = {
      comentsList: DataSource.getComments()
    }
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleClick)
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleClick)
  }

  handleClick = () => {
    this.setState({
      comentsList: DataSource.getComments()
    })
  }
  render() {
    return (
      <div>
        {
          this.state.comentsList.map(coment => (
            <Coment coment={coment} key={coment.id} />
          ))
        }
      </div>
    )
  }
}
