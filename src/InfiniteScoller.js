import React, { Component } from 'react'
import './InfiniteScroller.css'

class InfiniteScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollTop: 0
    }
    this.wrapperRef = React.createRef();
  }
  componentDidMount() {
    const { current: wrapper } = this.wrapperRef
    wrapper.addEventListener('scroll', this._handleScroll, { passive: true })
  }
  componentWillUnmount() {
    const { current: wrapper } = this.wrapperRef
    wrapper.removeEventListener('scroll', this._handleScroll)
  }
  _handleScroll = (event) => {
    const { current: wrapper } = this.wrapperRef
    const scrollTop = wrapper.scrollTop
    const clientHeight = wrapper.clientHeight
    const scrollHeight = wrapper.scrollHeight
    const maxScrollTop = scrollHeight - clientHeight
    console.log(scrollTop, scrollHeight, maxScrollTop)
    // threshold in pixels
    const threshold = 30
    if (scrollTop > this.state.prevScrollTop) {
      if (scrollTop >= (maxScrollTop - threshold)) {
        console.log('Triggering a load')
        if (this.props.triggerLoad) this.props.triggerLoad()
      }
    }
    this.setState({
      prevScrollTop: scrollTop
    })
  }
  render() {
    return (
      <div
        className="InfiniteScroller-wrapper"
        ref={this.wrapperRef}
      >
        {this.props.children}
      </div>
    )
  }
}

export default InfiniteScroller;