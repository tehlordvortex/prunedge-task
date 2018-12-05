import React, { Component } from 'react'
import './FeedItem.css'

class FeedItem extends Component {
  render() {
    const { title, summary, source, image, url } = this.props;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="FeedItem"
      >
        <div
          className="FeedItem-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div class="FeedItem-action">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
        </div>

        <div className="FeedItem-text">
          <h5 className="FeedItem-text_title">{title}</h5>
          <small className="FeedItem-text_category">From <b>sourcey}</b></small>
          <p className="FeedItem-text_summary">{summary}</p>
        </div>
      </a>
    )
  }
}

export default FeedItem;