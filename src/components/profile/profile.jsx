import { useLocation } from "react-router-dom";

export const Profile = () => {
  const { state } = useLocation();

  return <h1>Hello, {state?.userData ? state.userData.name : "user"}!</h1>;
};

export default Profile;
