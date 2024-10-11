import EdtButton from "../images/EditButton.png";
import AddButton from "../images/addbutton.png";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main({
  onEditProfileClick,
  onAddCardClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [UserName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados do usuário:", err);
      });

    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados do usuário:", err);
      });
  }, []);
  {
    return (
      <main>
        <section className="profile">
          <div
            className="profile__image-container"
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            <button
              className="profile__edit-icon"
              onClick={() => onEditAvatarClick(true)}
            ></button>
            <img
              src={userAvatar}
              alt="image profile"
              className="profile__image"
            />
          </div>
          <div className="profile__info">
            <div className="profile__content">
              <div className="profile__content-title-button">
                <h1 className="profile__title"> {UserName} </h1>
                <button
                  className="profile__edit-button"
                  type="button"
                  onClick={() => onEditProfileClick(true)}
                >
                  <img src={EdtButton} alt="edit button" />
                </button>
              </div>
              <h2 className="profile__explorar"> {userDescription} </h2>
            </div>
          </div>

          <button
            className="profile__add-button"
            type="button"
            onClick={() => onAddCardClick(true)}
          >
            <img src={AddButton} alt="addbutton" />
          </button>
        </section>
        <section className="elements">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
        </section>
      </main>
    );
  }
}
