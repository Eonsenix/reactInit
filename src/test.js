import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom'
import mixinLog from './mixin/mixins'
import ReactMixin from 'react-mixin'
import { Link } from 'react-router-dom';
// import axiosRequest from './axios/handleRequest'
import { Button } from 'antd';
import { Input } from 'antd';
export default class Test extends React.Component{
  static defaultProps = {
    dn:'另一种方式默认'
  }
  static propTypes = {
    autoPlay: PropTypes.bool//.isRequired
  }
  constructor () {
    super();
    this.state = {name: 'name1', xixi: '这是我的state'}
  }
  componentWillMount () {
    // console.log(this.state)
  }
  componentDidMount () {
    // this.setState({...this.props})
    // console.log(this.state)
  }
  componentWillReceiveProps(props) { // 接受新的props
    console.log(props)
  }
  /* shouldComponentUpdate(nextP, nextS) { // 接受新的props或者state时
    console.log(nextP, nextS)
    return true
  } */
  /* componentWillUpdate(nextProps, nextState) { // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    console.log('?')
  } */
  /* componentDidUpdate() { // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    console.log('?')
  } */
  changeUserInfo () {
    this.setState({name: 'name50'},()=>{
      console.log(this.state)
    })
    /* let thisRef = document.getElementById('thisRef')
    ReactDOM.findDOMNode(thisRef).style.color = 'red' */
    this.refs.thisRef.style.color = 'red'
    mixinLog.log()
  }
  render () {
    let html = '<div>this is html</div>'
    let cssName = true
    const style1 = { // 放render外面也行
      header: {
        backgroundColor: (this.state.name) === 'name2' ? '#ff583a' : '#ccc'
      }
    }
    setTimeout(()=>{
      // this.setState({name: 'name2'})
      // a = '2'
    },4000)
    /* axiosRequest({ method: 'get', url: `/DLMiddleware_bs-controller/restful/query/queryfundinfo?fundcode=7D265805321D4725D1572323A6F97668&appkey=Aq7MUu&appsecret=bJ0ZQI&appversion=1&channel=web&market=a&sign=BruEva` },{}).then((res)=>{
      console.log(res)
    }) */
    return (
      <div className="App" style={style1.header}>
        {this.props.dn1}
        <Input placeholder="Basic usage" onChange={this.props.childChange1} className={cssName? 'cnm' : 'cnm1'}/>
        <Button type="primary">Button</Button>
        <input id="thisRef" ref="thisRef" type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)}/>
        age: {this.state.age} {this.props.dn}<br/>
        {this.state.xixi}<br/>
        {this.props.data}
        <div>
          <Link to={
            {pathname: '/list/1234', hash: 'isHash', search: 'isSearch', whatever:1}
          }>点这里跳转路由</Link>
        </div>
        <p dangerouslySetInnerHTML={{__html : html}}></p>
      </div>
    )
  }
}
/* Test.defaultProps = { // 数据 默认值
  dn: '这是默认'
}
Test.propTypes = { // 限制传进来的数据 
  data: PropTypes.string.isRequired
} */

ReactMixin(Test.prototype, mixinLog)