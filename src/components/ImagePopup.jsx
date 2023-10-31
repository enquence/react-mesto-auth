function ImagePopup({card, onClose}) {

  return (
    <div className={`popup${card ? ' popup_opened' : ''}`} onMouseUp={onClose}>
      <div className="popup__image-container" onMouseUp={(evt) => evt.stopPropagation()}>
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <figure className="popup__image-content">
          <img className="popup__image" src={card?.link} alt={card?.name}/>
          <figcaption className="popup__image-caption">{card?.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup
