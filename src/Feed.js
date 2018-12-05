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
      itemsLoaded: 0,
      page: 0,
      totalItems: 0
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
    if (this.state.itemsLoaded && this.state.itemsLoaded === this.state.totalItems) return
    this.setState({
      loading: true
    })
    const itemsToLoad = 10
    const url = `https://newsapi.org/v2/everything?q=ReactJS&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page+1}&pageSize=${itemsToLoad}`
    const req = new Request(url)
    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        const resultCount = response.totalResults
        if (!this.state.totalItems) {
          this.setState({
            totalItems: resultCount,
            page: 1,
            itemsLoaded: itemsToLoad
          })
        }
        const newItems = response.articles.map(article => ({
          url: article.url,
          title: article.title,
          image: article.urlToImage,
          summary: article.description,
          source: article.source.name
        }))
        this.setState(prevState => ({
          loading: false,
          items: [
            ...prevState.items,
            ...newItems
          ],
          itemsLoaded: prevState.itemsLoaded + newItems.length,
          page: prevState.page + 1
        }))
      })
  }
  render() {
    const { items } = this.state
    return (
      <InfiniteScroller triggerLoad={this._loadMoreItems}>
        <div className="Feed">
            {items.map((item, index) => (
              <FeedItem
                url={item.url}
                image={item.image}
                title={item.title}
                category={item.source}
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
