import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logIn } from "../../store/userSlice";
import { selectUserData } from "../../store/selectors/user-slice-selectors";

import styles from "./login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isDataCorrect, setIsDataCorrect] = useState(false);

  const loginInputHandler = (evt) => {
    setLogin(evt.target.value);
  };

  const passwordInputHandler = (evt) => {
    setPassword(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    dispatch(logIn(true));
    navigate("/profile", { replace: true, state: { userData } });
  };

  useEffect(() => {
    if (userData.name === login && userData.password === password) {
      setIsDataCorrect(true);
    } else {
      setIsDataCorrect(false);
    }
  }, [login, password]);

  return (
    <form className={styles["login-form"]} onSubmit={formSubmitHandler}>
      <div className={styles["input-wrapper"]}>
        <label className={styles.label} htmlFor="login">
          Логин
        </label>
        <input
          className={styles.input}
          type="text"
          id="login"
          placeholder="Логин - alex"
          required
          value={login}
          onInput={loginInputHandler}
        />
      </div>

      <div className={styles["input-wrapper"]}>
        <label className={styles.label} htmlFor="password">
          Пароль
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="Пароль - qwerty"
          required
          value={password}
          onInput={passwordInputHandler}
        />
      </div>

      <button
        className={`${styles.button} ${
          isDataCorrect ? styles["button-active"] : styles["button-disabled"]
        }`}
        type="submit"
        disabled={isDataCorrect ? false : true}
      >
        Войти
      </button>
    </form>
  );
};

export default Login;
