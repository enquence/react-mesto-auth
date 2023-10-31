import React from 'react';

const InfoToolTip = ({notification, isOpen, onClose}) => {

  return (
    <div className={`popup${isOpen ? ' popup_opened': ''}`} onMouseDown={onClose}>
      <div className="popup__container" onMouseDown={(evt) => evt.stopPropagation()}>
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <div className={`popup__pic_type_${notification.type} popup__pic`}/>
        <h2 className="popup__text">{notification.text}</h2>
      </div>
    </div>
  )
};

export default InfoToolTip;
