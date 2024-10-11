import ClosePopupIcon from "../images/closepopupicon.png";

export default function PopupWithForm({
  name,
  title,
  children,
  buttonName,
  isOpen,
  onClose,
  isFormValid,
}) {
  return (
    <div className={`popup ${name} ${isOpen ? "popup__open" : ""}`}>
      <div className="overlay"></div>
      <form className="popup__form-title" noValidate>
        <div className="popup__form-itens">
          <div className="popup__button-close">
            <img src={ClosePopupIcon} alt="icon close" onClick={onClose} />
          </div>
          <h2 className="popup__title"> {title} </h2>
          {children}
          <button
            className="button button-submit"
            type="submit"
            required={!isFormValid}
          >
            {buttonName}
          </button>
        </div>
      </form>
    </div>
  );
}
