import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../Services/Firebase/Firebase";
import { Input } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { setName, setPhotoUrl } from "../../Services/Redux/FirebaseSlice";
import { setAPIData } from "../../Services/Redux/APIDataSlice";
import axios from "axios";

export default function LoginForm() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const URL = [];

  const getJsonData = async () => {
    const response = await axios.get(URL);
    dispatch(setAPIData(response.data));
  };
  const setFbData = () => {
    db.collection(auth.currentUser.uid ? auth.currentUser.uid : "Unkown")
      .doc()
      .set({});

    db.collection("centerlSystem")
      .doc("backendAPI")
      .get()
      .then(async (doc) => {
        let data = doc.data();
        await URL.push(data["API"]);
        await getJsonData();
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const handleSignIn = () => {
    try {
      auth
        .signInWithEmailAndPassword(Email, Password)
        .then(async () => {
          dispatch(
            setName(
              auth.currentUser.displayName
                ? auth.currentUser.displayName
                : "User Name"
            )
          );
          dispatch(
            setPhotoUrl(
              auth.currentUser.photoURL
                ? auth.currentUser.photoURL
                : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            )
          );
          setFbData();
          history.replace("Home");
        })
        .catch((e) => {
          alert(e["message"]);
        });
    } catch (e) {
      alert(e["message"]);
    }
  };

  return (
    <div className=" mx-14 p-10 bg-black text-white rounded-md border-yellow-400">
      <div>
        <div className="text-yellow-500 font-thin text-3xl my-2 flex space-x-1">
          <div className="font-bold text-5xl">PAR </div>
          <div className="m-auto">Cinemas</div>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mt-10">Welcome</div>
        <div className="flex font-light text-md">Please Log in</div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col  w-full space-y-3 ">
          <div className="border-2 border-yellow-500 p-2 rounded-md text-white">
            <Input
              placeholder="Email"
              type="email"
              fullWidth
              onChange={(text) => setEmail(text.target.value)}
              style={{ color: "white" }}
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
        </div>
      </div>
      <div className="mt-8 space-x-2 flex">
        <div
          className="bg-yellow-500  p-2 rounded-sm px-2 text-black font-bold cursor-pointer"
          onClick={handleSignIn}
        >
          Log In
        </div>
        <Link to="/Register">
          <div className="bg-yellow-500 p-2 rounded-sm text-black font-bold">
            Sign Up
          </div>
        </Link>
      </div>
    </div>
  );
}
