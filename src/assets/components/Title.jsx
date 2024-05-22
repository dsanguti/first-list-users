import style from '../css/Title.module.css'

const Title = ( { children }) => (
  <h1 className= {style.title}> { children } </h1>
);
export default Title;

