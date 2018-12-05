import React, { Component } from 'react'
import './FeedItem.css'

class FeedItem extends Component {
  render() {
    const { title, summary, category } = this.props;
    return (
      <div className="FeedItem">
        <div className="FeedItem-image"></div>
        <div className="FeedItem-text">
          <h5 className="FeedItem-text_title">{title}</h5>
          <small className="FeedItem-text_category">In <b>{category}</b></small>
          <p className="FeedItem-text_summary">{summary}</p>
        </div>
      </div>
    )
  }
}

export default FeedItem;