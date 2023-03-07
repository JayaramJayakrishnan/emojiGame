// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winOrLose, score, playAgain} = props

  if (winOrLose === 'Win') {
    return (
      <div className="Win-card">
        <div>
          <h1 className="win-heading">You Won</h1>
          <p className="win-score-label">Best Score</p>
          <p className="win-score">{score}/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="win-image"
        />
      </div>
    )
  }
  return (
    <div className="Win-card">
      <div>
        <h1 className="win-heading">You Lose</h1>
        <p className="win-score-label">Score</p>
        <p className="win-score">{score}/12</p>
        <button type="button" className="play-again-button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="win-image"
      />
    </div>
  )
}

export default WinOrLoseCard
