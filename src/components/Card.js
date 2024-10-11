import TrashButton from "../images/trash.svg";
import ElementHeart from "../images/heart.svg";

export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="elements__item">
      <button type="button" className="elements__trash-button">
        <img src={TrashButton} alt="trash button" />
      </button>
      <img
        src={card.link}
        alt="elementimg"
        className="elements__image"
        onClick={handleClick}
      />

      <div className="elements__content">
        <h2 className="elements__title"> {card.name} </h2>
        <div className="elements__container-like-button">
          <img
            src={ElementHeart}
            className="elements__heart"
            alt="heart icon"
          />
          <span className="elements__count-like">0</span>
        </div>
      </div>
    </div>
  );
}
