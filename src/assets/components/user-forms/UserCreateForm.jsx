import { USER_ROLES } from "../../constants/userRoles";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import InputCheckBox from "../forms/InputCheckBox";
import InputText from "../forms/InputText";
import InputTextAsync from "../forms/InputTextAsync";
import Select from "../forms/Select";
import CrossIcon from "../icons/CrossIcon";
import style from "./UserCreateForm.module.css";

const UserCreateForm = ({ onClose }) => {
  return (
    <form className={style.form}>
      <IconButton
        className={style.close}
        icon={CrossIcon}
        filled
        onClick={onClose}
      />
      <div className={style.row}>
        <InputText
          className={style.input}
          label="Nombre"
          placeholder="dani sanchez"
        ></InputText>
        <InputTextAsync
          className={style.inputTextAsyncClassName}
          label="Username"
          placeholder="danisanchez"
        ></InputTextAsync>
      </div>
      <div className={style.row}>
        <Select>
          <option value={USER_ROLES.TEACHER}>Profesor</option>
          <option value={USER_ROLES.STUDENT}>Alumno</option>
          <option value={USER_ROLES.OTHER}>Otro</option>
        </Select>
        <div className={style.active}>
          <InputCheckBox />
          <span>¿Activo?</span>
        </div>
        <Button type="submit">Crear usuario</Button>
      </div>
    </form>
  );
};

export default UserCreateForm;
