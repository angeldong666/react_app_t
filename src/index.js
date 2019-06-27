import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class StateTest extends Component {
  static defaultProps = {
    plist: {
      p1: 'default1',
      p2: 'default2',
    },
    pName: 'defaultName'
  }

  constructor(props) {
    super(props)
    this.state = {
      txt: '内容',
      rn: 0,
    }
  }

  tapProps() {
    console.log(this.props)
  }

  tapChange() {
    this.setState((prevState) => {
      return {
        txt: '内容' + (prevState.rn + 1),
        rn: prevState.rn + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <div onClick={this.tapChange.bind(this)}>点击切换</div>
        <div>{'第' + this.state.rn + '节:' + this.state.txt}</div>
        <div onClick={this.tapProps.bind(this)}>获取props:{this.props.pName} - {this.props.plist.p1}</div>
      </div>
    )
  }
}

class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      show: false,
    }
  }

  tapLog(str, e) {

    this.setState((prevState) => {
      console.log(prevState)
      return { index: prevState.index + 1 }
    })
    // this.setState((prevState) => {
    //   return { index: (prevState + 3) }
    // })
    console.log(this.state.index)
    // console.log(str)
    // console.log(e)
  }

  render() {
    return (
      <div onClick={this.tapLog.bind(this, 'word')} data-index='1'>title</div>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plist: {
        p1: '',
        p2: '',
      },
      pName: ''
    }
  }
  renderGoodWord(goodWord, badWord) {
    const isGoodWord = true
    console.log(this)
    return isGoodWord ? goodWord : badWord
  }

  changeProps() {
    this.setState({
      pName: 'pName->pName2',
      // Object.assign(目标对象,源对象...)
      plist: Object.assign({}, this.state.plist, { p1: 'p1->p11' })
    })
    console.log(this.state.pName)
  }

  render() {
    const txt = '文本';
    const className = 'header';
    let divType = false;
    const doms1 = <div>doms1</div>;
    const doms2 = <div>doms2</div>;
    const doms3 = txt === '' ? <div>doms3 empty</div> : <div>doms3 full</div>;
    const arr1 = ['name', 1, 'txt1'];
    return (
      <div className={className}>
        <h1>react{txt === '' ? 1 : 2}</h1>
        {
          divType
            ? <div>typeTrue</div>
            : null
        }
        {doms1}
        {doms2}
        {doms3}
        <div>{arr1}</div>
        {this.renderGoodWord(
          <strong> is good</strong>,
          <span> is not good</span>
        )}
        {/* 事件 */}
        <Title />
        {/* state */}
        <StateTest plist={this.state.plist} pName={this.state.pName} />
        {/* 更改props值 */}
        <div onClick={this.changeProps.bind(this)}>更改props</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
