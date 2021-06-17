import React from "react";
import LoginForm from "./LoginForm";
import { auth } from "../../Services/Firebase/Firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  setNavInit,
  setUserData,
} from "../../Services/Redux/IsUserLoggedSlice";

export default function Login() {
  const userState = useSelector((state) => state.UserStatus.userState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setNavInit(false));
        dispatch(setUserData(user));
      }
      dispatch(setNavInit(false));
    });
  }, [userState]);

  return (
    <div
      className="flex flex-wrap h-auto justify-center py-20 bg-gray-900"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="w-full md:w-4/12 m-auto h-auto">
        <LoginForm />
      </div>
    </div>
  );
}
