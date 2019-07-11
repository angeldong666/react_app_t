import React from 'react'
import ReactDOM from 'react-dom'
// 一 (1),基础练习
// import Demo1 from './Demo1'
// 一 (2),包含练习
import CommentApp from './CommentApp'
// import Stage2 from './Stage2'
import './index.css'

ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)

// 小贴士
/*
  组件的私有方法都用 _ 开头，
  所有事件监听的方法都用 handle 开头。
  把事件监听方法传给组件的时候，属性名用 on 开头。

  组件的内容编写顺序如下:
    1. static 开头的类属性，如 defaultProps、propTypes。
    2. 构造函数，constructor。
    3. getter/setter（还不了解的同学可以暂时忽略）。
    4. 组件生命周期。
    5. _ 开头的私有方法。
    6. 事件监听方法，handle*。
    7. render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
    8. render() 方法。
*/