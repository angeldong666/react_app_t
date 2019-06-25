import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Title extends Component{

  return ()
}

class Header extends Component {

  renderGoodWord(goodWord, badWord) {
    const isGoodWord = true
    return isGoodWord ? goodWord : badWord
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
        <h1>react{txt === '' ? 12 : 2}</h1>
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
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)
