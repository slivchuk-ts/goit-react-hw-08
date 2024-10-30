import s from './Modal.module.css'; 

 const Modal =({ onClose, onConfirm, message }) =>{
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h2>Confirmation</h2>
        <p>{message}</p>
        <button className={s.confirmButton} onClick={onConfirm}>Confirm</button>
        <button className={s.cancelButton} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;