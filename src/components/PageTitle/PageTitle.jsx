import s from "./PageTitle.module.css";

 function PageTitle({ children }) {
  return <h1 className={s.title}>{children}</h1>;
}

export default PageTitle;