import { useLocation } from "react-router-dom";
import style from "./profile.module.css";

export const Profile = () => {
  const { state } = useLocation();

  return (
    <h1 className={style.title}>
      Hello, {state?.userData ? state.userData.name : "user"}!
    </h1>
  );
};

export default Profile;
