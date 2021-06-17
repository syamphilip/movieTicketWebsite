import React, { useState } from "react";
import { auth, db } from "../../Services/Firebase/Firebase";
import { Input } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName, setPhotoUrl } from "../../Services/Redux/FirebaseSlice";

export default function Register() {
  const [DisplayName, setDisplayName] = useState();
  const [Url, setUrl] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    try {
      auth
        .createUserWithEmailAndPassword(Email, Password)
        .then(() => {
          dispatch(setName(DisplayName));
          dispatch(setPhotoUrl(Url));
          auth.currentUser
            .updateProfile({
              displayName: DisplayName,
              photoURL: Url,
            })
            .then(() => {
              db.collection(
                auth.currentUser.uid ? auth.currentUser.uid : "Unkown"
              )
                .doc()
                .set({});
              history.push("/Home");
            });
        })
        .catch((e) => {
          alert(e["message"]);
        });
    } catch (e) {
      alert(e["message"]);
    }
  };
  return (
    <div
      className="flex flex-wrap h-auto justify-center py-10 bg-gray-900"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="w-full md:w-4/12 m-auto h-auto">
        <div className=" mx-14 p-10 bg-black text-white rounded-md border-yellow-400">
          <div>
            <div className="text-yellow-500 font-thin text-3xl my-2 flex space-x-1">
              <div className="font-bold text-5xl">PAR </div>
              <div className="m-auto">Cinemas</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl mt-10">Welcome</div>
            <div className="flex font-light text-md">Sign Up Now</div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="flex flex-col  w-full space-y-3 ">
              <div className="border-2 border-yellow-500 p-2 rounded-md text-white">
                <Input
                  placeholder="Full Name"
                  type="name"
                  fullWidth
                  onChange={(text) => setDisplayName(text.target.value)}
                  style={{ color: "white" }}
                />
              </div>
              <div className="border-2 border-yellow-500 p-2 rounded-md text-white">
                <Input
                  placeholder="Email"
                  type="email"
                  onChange={(text) => setEmail(text.target.value)}
                  style={{ color: "white" }}
                  fullWidth
                />
              </div>
              <div className="border-2 border-yellow-500 p-2 rounded-md text-white">
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(text) => setPassword(text.target.value)}
                  style={{ color: "white" }}
                  fullWidth
                />
              </div>
              <div className="border-2 border-yellow-500 p-2 rounded-md text-white">
                <Input
                  placeholder="Profile Photo URL"
                  type="url"
                  onChange={(text) => setUrl(text.target.value)}
                  style={{ color: "white" }}
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex">
            <div
              className="bg-yellow-500  p-2 rounded-sm px-2 text-black font-bold cursor-pointer"
              onClick={handleSignUp}
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
