// Write your code here.
import './index.css'
const ThumbnailItem = props => {
  const {details, changeItem, isCurrent} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = details
  const change = () => {
    changeItem(imageUrl, imageAltText, id)
  }
  const style = isCurrent ? 'final-class' : ''
  return (
    <div className="list-item">
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`thumb ${style}`}
        onClick={change}
      />
    </div>
  )
}

export default ThumbnailItem
