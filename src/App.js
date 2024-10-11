import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import { useState } from "react";
import ImagePopup from "./components/ImagePopup";
import PopupEditProfile from "./components/PopupEditProfile";
import PopupAddCard from "./components/PopupAddCard";
import PopupEditAvatar from "./components/PopupEditAvatar";

export function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  // valor  | função que seta o valor | valor inicial

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard();
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={setIsEditProfilePopupOpen}
        onAddCardClick={setIsAddCardPopupOpen}
        onEditAvatarClick={setIsEditAvatarPopupOpen}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard isOpen={isAddCardPopupOpen} onClose={closeAllPopups} />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        id="popup popup-delete"
        title="Tem Certeza ?"
        buttonName="Sim"
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
