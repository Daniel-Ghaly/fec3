import React, {useRef} from 'react';
import ReactDom from 'react-dom';
import NewReviewForm from './NewReviewForm.jsx';

function NewReviewModal ({setShowModal}) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className='form-modal-container'
      ref={modalRef}
      onClick={() => setShowModal(false)}>
      <div className='form-modal'
        onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShowModal(false)}>X</button>
        <NewReviewForm />
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
}

export default NewReviewModal;