import React, { Component } from 'react'
import './Feed.css'
import FeedItem from './FeedItem'
import InfiniteScroller from './InfiniteScoller'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: [],
      itemsLoaded: 0
    }
  }
  componentDidMount() {
    this._loadMoreItems()
  }
  _maybeRenderSpinner() {
    if (this.state.loading) {
      return (
        <div className="Feed-spinner-wrapper">
          <div className="Feed-spinner"></div>
        </div>
      )
    } else {
      return null
    }
  }
  _loadMoreItems = () => {
    // todo: fetch from api
    if (this.state.loading) return
    const itemsToLoad = 10
    const fakeItem = {
      title: 'Lorem Ipsum',
      summary: 'Minim est dolore commodo nostrud culpa Lorem. Exercitation laborum consectetur...',
      category: 'Technology'
    }
    this.setState({
      loading: true
    })
    setTimeout(() => {
      const newItems = Array.from({ length: itemsToLoad }).map(() => ({...fakeItem}))
      this.setState(prevState => ({
        loading: false,
        items: [
          ...prevState.items,
          ...newItems
        ]
      }))
    }, 2000)
  }
  render() {
    const { items } = this.state
    return (
      <InfiniteScroller triggerLoad={this._loadMoreItems}>
        <div className="Feed">
            {items.map((item, index) => (
              <FeedItem
                title={item.title}
                category={item.category}
                summary={item.summary}
                key={index}
              />
            ))}
            {this._maybeRenderSpinner()}
        </div>
      </InfiniteScroller>
    )
  }
}

export default Feed;
