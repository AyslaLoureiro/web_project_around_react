import PopupWithForm from "./PopupWithForm";

export default function PopupEditAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      id="popup-avatar-edit"
      title="Alterar a foto do perfil"
      buttonName="Salvar"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="popup__form-edit-inputs">
        <input
          className="popup__form-input popup__input-photo-edit"
          placeholder="link de imagem"
          type="url"
          id="input-avatar"
          required
          name="avatar"
        />
        <span className="popup__form-error" id="input-avatar-error"></span>
      </div>
    </PopupWithForm>
  );
}
