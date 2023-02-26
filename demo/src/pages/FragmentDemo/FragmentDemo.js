import React, { Component } from 'react'

export default class FragmentDemo extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <div>1</div>
      //   <div>2</div>
      //   <div>3</div>
      // </React.Fragment>
      // <>
      //   <div>1</div>
      //   <div>2</div>
      //   <div>3</div>
      // </>
      <>
        {
          [1, 2, 3].map(item => {
            return <React.Fragment key={item}>
              <div>{item}</div>
            </React.Fragment>
          })
        }
      </>
    )
  }
}
