import CheckIcon from "../icons/CheckIcon";
import style from "./InputCheckBox.module.css";

const InputCheckBox = ({className, ...props}) => (
  <label className={`${style.label} ${className || ''}`}>
    <input {...props} type="checkbox" className={style.input}></input>
    <CheckIcon className={style.check} />
  </label>
);
export default InputCheckBox;
