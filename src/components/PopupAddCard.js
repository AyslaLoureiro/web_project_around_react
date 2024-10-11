import PopupWithForm from "./PopupWithForm";

export default function PopupAddCard({ isOpen, onClose }) {
  return (
    <PopupWithForm
      id="popup-add"
      title="Novo Local"
      buttonName="Criar"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="popup__form-inputs">
        <input
          className="popup__form-input popup__form-name popup__add-form-name"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          id="input-title"
          required
          name="title"
        />
        <span className="popup__form-error" id="input-title-error"></span>
      </div>

      <div className="popup__form-inputs">
        <input
          className="popup__form-input popup__form-job popup__add-form-image"
          placeholder="Link de imagem"
          type="url"
          id="input-image"
          required
          name="link"
        />
        <span className="popup__form-error" id="input-image-error"></span>
      </div>
    </PopupWithForm>
  );
}
