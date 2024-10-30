import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filters/selectors';

 const ContactList=()=> {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </div>
  );
}

export default ContactList;