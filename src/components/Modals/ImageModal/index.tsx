import React from 'react';
import ReactDOM from 'react-dom';
import ImageModalProps from './ImageModal.props';
import './style.scss';

export const ImageModal: React.FC<ImageModalProps> = ({ isShown, hide, image, }) => {
    const modal = (
        <div className='modal'>
            <div className="modal__content">
                <button className="modal__button" onClick={hide}>Close</button>
                <div className="modal__image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}