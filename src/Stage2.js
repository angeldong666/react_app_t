import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

// props.children
class Card extends Component {
    static propTypes = {
        comment: PropTypes.object,
    }
    render() {
        const { comment } = this.props;
        return (
            // <div>{this.props.children}</div>
            <div>{comment.name}</div>
        )
    }
}

class Stage2 extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
            testHtml: [
                '<div style="color:red;border:1px solid blue;font-size:14px">渲染html</div>'
            ],

        }
        console.log('construct')
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        // this.input.focus()
        console.log(this.input.offsetWidth)
        console.log('component did mount')
    }

    changeText() {
        this.setState({
            isShow: !this.state.isShow,
        })
    }

    render() {
        console.log('render')
        return (
            <div>

                {/* <Times time={this.state.nowTime} /> */}
                <div onClick={this.changeText.bind(this)}>显示/隐藏</div>

                {/* {this.state.isShow ? <Times time={this.state.nowTime} /> : null} */}
                {this.state.isShow ? <Clock /> : null}

                {/* ref 属性 */}
                <input ref={(input => { this.input = input })} type="text" />

                {/* props.children */}
                {/* <Card>
                    <div>第一行</div>
                    <div>第一行内</div>
                </Card> */}

                {/* 渲染html */}
                <div dangerouslySetInnerHTML={{ __html: this.state.testHtml }}></div>

                {/* 类型检测 propsType */}
                <Card comment={{ name: 'a' }} />
            </div>
        )
    }
}

export default Stage2;
