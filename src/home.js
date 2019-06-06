import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Test from './test';
// import List from './list';
import Appa from './page/page';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import {createStore} from 'redux'
// import reducer from './reducers/reducers';
export default class Home extends React.Component{
  constructor () {
    super()
    this.state = {
      stateInfo: 'this is state'
    }
  }
  inc(){
    return {type: 'Add'}
  }
  sub(){
    return {type: 'Sub'}
  }
  componentDidMount(){
    /* let store = createStore(reducer)
    console.log(store.getState())
    store.dispatch(this.inc())
    console.log(store.getState())
    store.dispatch(this.sub())
    console.log(store.getState())
    this.setState({stateInfo:'改了'}) */
  }
  childChange2 (event) {
    this.setState({stateInfo: event.target.value})
  }
  linkTo() {
    // hash 必定有 且自动加#
    // search 必定有 且自动加?
    this.props.history.push({pathname: '/list/1234', hash: 'isHash', search: 'isSearch', whatever:1})
  }
  render () {
    let img = require('./logo.svg')
    let isShow = '1'
    let div = <Test data={this.state.stateInfo} childChange1={this.childChange2.bind(this)}/>
    /* function Test(props) {
      console.log(props)
      return (
        <div>
          {React.Children.map(props.children, child => {
            return React.cloneElement(child, {
              //把父组件的props.name赋值给每个子组件
              name: '22'
            })
          })}
        </div>
      )
    } */    
    return (
      <div className="App">
        <Appa/>
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo" style={{display: isShow === '1' ? 'block' : 'none'}}/>
          {this.props.data}
          {this.state.stateInfo}
          <div>
            {div}
          </div>
          {/* <Test>
            <List></List>
          </Test> */}
          <Button onClick={this.linkTo.bind(this)} type="primary">这里是函数跳转路由</Button>
          <Link to={
            {pathname: '/list/1234', hash: 'isHash', search: 'isSearch', whatever:1}
          }>点这里跳转路由</Link>
        </header>
      </div>
    )
  }
}