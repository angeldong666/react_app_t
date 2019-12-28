import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.state = { timeString: '' }
  }

  componentWillMount() {
    // let that = this;
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this)
      , 500000)
    // this._timer = setInterval(() => {
    //   that._updateTimeString()
    //   console.log(1)
    // }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  handleDeleteComment(event) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  _updateTimeString() {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.time) / 1000;
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  render() {
    const { comment } = this.props;
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p className='content-box' dangerouslySetInnerHTML={{ __html: this._getProcessedContent(comment.content) }}></p>
        <p className='creat-time'>{this.state.timeString}</p>
        <div className='delete-btn' onClick={this.handleDeleteComment.bind(this)}>删除</div>
      </div>
    )
  }
}

export default Comment