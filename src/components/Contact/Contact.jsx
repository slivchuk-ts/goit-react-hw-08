import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contacts/operations';
import { openModal, closeModal } from '../../redux/modal/slice'; 
import  Modal  from '../Modal/Modal';
import { selectModal } from '../../redux/modal/selectors'; 
import { toast } from 'react-hot-toast';
import s from './Contact.module.css';

 const Contact=({ id, name, number })=> {
  const dispatch = useDispatch();
  const { isOpen, contactToDelete } = useSelector(selectModal); 

  const handleDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      toast.success(`${name} has been deleted!`);
      dispatch(closeModal()); 
    }
  };

  const openDeleteModal = () => {
    dispatch(openModal(id)); 
  };


  return (
    <>
      <li className={s.item}>
        <p className={s.contact}>
          <span className={s.name}>
            <FaUser className={s.icon} />
            {name}
          </span>
          <span className={s.number}>
            <FaPhoneAlt className={s.icon} />
            {number}
          </span>
        </p>
        <button onClick={openDeleteModal} className={s.button}>Delete</button>
      </li>

      {isOpen && (
        <Modal
          onClose={() => dispatch(closeModal())}
          onConfirm={handleDelete}
          message={`Are you sure you want to delete ${name}?`} 
        />
      )}
    </>
  );
}

export default Contact;