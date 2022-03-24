import './index.css'

const BrowserHistory = props => {
  const {eachHistory, deleteBrowserHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistory
  const onDeleteHistory = () => {
    deleteBrowserHistory(id)
  }
  return (
    <li className="list-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="title-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button className="button" onClick={onDeleteHistory} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
