// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, winOrLose} = props

  if (winOrLose === '') {
    return (
      <nav className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="nav-text">Emoji Game</h1>
        </div>
        <div className="score-container">
          <p className="nav-text margin-right">Score: {score}</p>
          <p className="nav-text">Top Score: {topScore}</p>
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="nav-text">Emoji Game</h1>
      </div>
    </nav>
  )
}

export default NavBar
