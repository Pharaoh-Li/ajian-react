import React from "react";

// 高阶组件，接受一个组件，返回一个新的组件
function withSubscription(WrapedCp, selectData) {
  class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        data: selectData(DataSource, props)
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
        data: selectData(DataSource, props)
      })
    }

    render() {
      return <WrapedCp data={this.state.data} {...this.props} />
    }

  }

  return App
}

// HOC定义好之后，开始完成业务组件
// CommentList做UI渲染
const CommentListWithSub = withSubscription(
  CommentList,
  () => { }
)


export default withSubscription;
