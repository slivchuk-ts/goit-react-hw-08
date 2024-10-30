import AppBar from '../AppBar/AppBar'
import s from './Layout.module.css'


 const Layout=({ children })=> {
  return (
    <div className={s.container}>
      <AppBar />
      {children}
    </div>
  );
}

export default Layout;