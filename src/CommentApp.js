import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  componentWillMount() {
    this._getComments()
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }

  handleDeleteComment (index) {
    // 删除对应下标的评论
    const comments = this.state.comments;
    comments.splice(index,1)
    this.setState({comments})
    this._saveComments(comments)
  }

  _saveComments(comments) {
    window.sessionStorage.setItem('comments', JSON.stringify(comments))
  }

  _getComments() {
    let comments = window.sessionStorage.getItem('comments');
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({
        comments: comments,
      })
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp