// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const selectEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li onClick={selectEmoji}>
      <button type="button" className="emoji-card">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
