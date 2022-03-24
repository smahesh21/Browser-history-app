import {Component} from 'react'

import BrowserHistory from './components/BrowserHistory'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {historyList: initialHistoryList, searchInput: ''}

  onChangeSearchText = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  deleteBrowserHistory = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(
      historyDetails => historyDetails.id !== id,
    )
    this.setState({historyList: updatedList})
  }

  render() {
    const {historyList, searchInput} = this.state
    const searchResults = historyList.filter(eachHistoryDetails =>
      eachHistoryDetails.title
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-website-logo"
            alt="app logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchText}
              className="search-text"
              placeholder="Search history"
            />
          </div>
        </div>
        <div className="bottom-section">
          <ul className="ul-list-container">
            {searchResults.map(eachHistory => (
              <BrowserHistory
                eachHistory={eachHistory}
                deleteBrowserHistory={this.deleteBrowserHistory}
                key={eachHistory.id}
              />
            ))}
          </ul>
          {searchInput === '' && (
            <p className="description">There is no history to show</p>
          )}
          {searchResults.length === 0 && (
            <p className="description">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}
export default App
