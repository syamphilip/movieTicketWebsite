import React from "react";
import { Link } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import UserSignedInState from "./UserSignedInState";

export default function Navbar() {
  const userState = useSelector((state) => state.UserStatus.userState);
  const navInitialize = useSelector((state) => state.UserStatus.navInitialize);

  if (navInitialize)
    return (
      <nav
        className="flex bg-gray-900 h-24 justify-end"
        style={{ backgroundColor: "#121212" }}
      >
        <div className="my-auto space-x-4 mx-5 text-white font-normal  text-md mr-2">
          <div>Loading...</div>
        </div>
      </nav>
    );
  if (userState) {
    return <UserSignedInState />;
  } else {
    return (
      <nav
        className="flex bg-gray-300 h-24 "
        style={{ backgroundColor: "#121212" }}
      >
        <div className="my-auto space-x-4 mx-5 text-white font-normal  text-md mr-2 flex">
          <Link
            to="/"
            className="bg-yellow-500 p-2 rounded-sm items-center flex"
          >
            <div>
              <LoginOutlined size="10" className="mr-2 align-middle" />
            </div>
            <div>Log In</div>
          </Link>
          <Link
            to="/Register"
            className="bg-yellow-500 p-2 rounded-sm items-center flex"
          >
            <div>
              <LoginOutlined size="10" className="mr-2 align-middle" />
            </div>
            <div>Sign Up</div>
          </Link>
        </div>
      </nav>
    );
  }
}
