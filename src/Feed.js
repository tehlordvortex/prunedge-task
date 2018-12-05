import React, { Component } from 'react'
import './Feed.css'
import FeedItem from './FeedItem'

class Feed extends Component {
  render() {
    const placeholders = [1,2,3,4,5,6,7,8,9,10]
    return (
      <div className="Feed">
        {placeholders.map(index => (
          <FeedItem
            title="Lorem Ipsum"
            category="Technology"
            summary="Eu occaecat aute laborum cillum. Excepteur minim ea anim est fugiat non."
          />
        ))}
      </div>
    )
  }
}

export default Feed;
