/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    winOrLose: '',
    currentGameEmojisClicked: [],
  }

  onClickEmoji = id => {
    const {currentGameEmojisClicked, score, topScore} = this.state
    const isAlreadyClicked = currentGameEmojisClicked.find(
      emojiId => emojiId === id,
    )
    if (isAlreadyClicked === undefined) {
      if (score < 11) {
        this.setState({
          score: score + 1,
          currentGameEmojisClicked: [...currentGameEmojisClicked, id],
        })
      } else {
        this.setState({
          score: score + 1,
          winOrLose: 'Win',
          topScore: 12,
        })
      }
    } else if (isAlreadyClicked !== undefined) {
      if (score <= topScore) {
        this.setState({
          winOrLose: 'Lose',
        })
      } else {
        this.setState({
          winOrLose: 'Lose',
          topScore: score,
        })
      }
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      score: 0,
      topScore: prevState.topScore,
      winOrLose: '',
      currentGameEmojisClicked: [],
    }))
  }

  render() {
    const {score, topScore, winOrLose} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    console.log(shuffledEmojisList)
    return (
      <div className="bg-container">
        <NavBar winOrLose={winOrLose} score={score} topScore={topScore} />
        {winOrLose === '' && (
          <ul className="emoji-card-container">
            {shuffledEmojisList.map(item => (
              <EmojiCard
                emojiDetails={item}
                key={item.id}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
        {winOrLose !== '' && (
          <WinOrLoseCard
            winOrLose={winOrLose}
            score={score}
            playAgain={this.playAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
