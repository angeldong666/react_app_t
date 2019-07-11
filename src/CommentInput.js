import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: '',
            time: new Date(),
        }
    }

    componentWillMount() {
        this._setUsername()
    }

    componentDidMount() {
        this.textarea.focus()
    }
    tapInputName(event) {
        this.setState({
            username: event.target.value
        })
    }
    tapTextValue(event) {
        this.setState({
            content: event.target.value
        })
    }
    tapSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({ username, content, time: new Date().getTime() })
        }
    }

    handleUserBlur(event) {
        this._saveUserInfo(event.target.value)
    }

    _saveUserInfo(username) {
        window.sessionStorage.setItem('username', username)
    }

    _setUsername() {
        const username = window.sessionStorage.getItem('username')
        if (username) {
            this.setState({
                username: username,
            })
        }
    }

    _getNowtime() {

    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUserBlur.bind(this)} onChange={this.tapInputName.bind(this)} value={this.state.username} placeholder='请输入' />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} onChange={this.tapTextValue.bind(this)} value={this.state.content} placeholder='请输入' />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.tapSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput