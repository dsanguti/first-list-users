import { useState } from "react";
import { USER_ROLES } from "../../constants/userRoles";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import InputCheckBox from "../forms/InputCheckBox";
import InputText from "../forms/InputText";
import InputTextAsync from "../forms/InputTextAsync";
import Select from "../forms/Select";
import CrossIcon from "../icons/CrossIcon";
import { validateName } from "../lib/users/userValidations";
import style from "./UserCreateForm.module.css";

const UserCreateForm = ({ onClose }) => {
  const { username, name, setUserName, setName } = useFormValues();

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
          error={name.error}
          value={name.value}
          onChange={(ev) => setName(ev.target.value)}
        ></InputText>
        <InputTextAsync
          className={style.inputTextAsyncClassName}
          label="Username"
          placeholder="danisanchez"
          error={username.error}
          value={username.value}
          onChange={(ev) => setUserName(ev.target.value)}
        ></InputTextAsync>
      </div>
      <div className={style.row}>
        <Select name="role">
          <option value={USER_ROLES.TEACHER}>Profesor</option>
          <option value={USER_ROLES.STUDENT}>Alumno</option>
          <option value={USER_ROLES.OTHER}>Otro</option>
        </Select>
        <div className={style.active}>
          <InputCheckBox name="active" />
          <span>¿Activo?</span>
        </div>
        <Button type="submit">Crear usuario</Button>
      </div>
    </form>
  );
};

const useFormValues = () => {
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: undefined,
    },
    username: {
      value: "",
      erorr: undefined,
    },
  });

  const setName = (newName) => {
    const error = validateName(newName);
    setFormValues({
      ...formValues,
      name: { value: newName, error: error },
    });
  };
  const setUserName = (newUserName) => {

    const error = validateName(newUserName)
    setFormValues({
      ...formValues,
      username: { value: newUserName, error: error },
    });
  };

  return { ...formValues, setName, setUserName };
};
export default UserCreateForm;
