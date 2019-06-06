import React from 'react';

export default class List extends React.Component{
  constructor () {
    super();
    this.state = {name: 'name1', xixi: 'xixi'}
  }
  componentDidMount () {
    console.log(this.props)
    console.log(this.state)
  }
  render () {
    return (
      <div className="App">
        this is new router
      </div>
    )
  }
}