import React from 'react';
import './App.scss';
import Test from './test';
import List from './list';
import Home from './home';
import { BrowserRouter, Route, HashRouter, Switch, Redirect } from 'react-router-dom';
export default class App extends React.Component{
  constructor () {
    super()
    this.state = {
      age: 20
    }
  }
  render () {
    // console.log(this.props, this.state) // 可以在这里获取props,state
    // BrowserRouter
    return (
      <HashRouter>
        <Switch>
          <Route component={Home} exact path="/home" data='data'></Route>
          <Route component={Test} exact path="/index"></Route>
          <Route component={List} exact path="/list/:id"></Route>
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </HashRouter>
    )
  }
}
/*
Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。
1.基于tree diff策略，React对Virtual DOM树进行 分层比较、层级控制，只对相同颜色框内的节点进行比较(同一父节点的全部子节点)，
当发现某一子节点不在了直接删除该节点以及其所有子节点，不会用于进一步的比较，在算法层面上就是说只需要遍历一次就可以了，而无需在进行不必要的比较，便能完成整个DOM树的比较。

对于同一类型的组件，根据Virtual DOM是否变化也分两种，可以用shouldComponentUpdate()判断Virtual DOM是否发生了变化，
若没有变化就不需要在进行diff，这样可以节省大量时间，若变化了，就对相关节点进行update
对于非同一类的组件，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。

所有同一层级的子节点.他们都可以通过key来区分

animation-fill-mode: forwards;
@keyframes	规定动画。	3
animation	所有动画属性的简写属性，除了 animation-play-state 属性。	3
animation-name	规定 @keyframes 动画的名称。	3
animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。	3
animation-timing-function	规定动画的速度曲线。默认是 "ease"。	3
animation-delay	规定动画何时开始。默认是 0。	3
animation-iteration-count	规定动画被播放的次数。默认是 1。	3
animation-direction	规定动画是否在下一周期逆向地播放。默认是 "normal"。	3
animation-play-state	规定动画是否正在运行或暂停。默认是 "running"。	3
animation-fill-mode	规定对象动画时间之外的状态。
*/