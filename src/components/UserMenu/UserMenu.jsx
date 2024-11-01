import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

 const UserMenu=() =>{
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())} type='button' className={s.button}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;