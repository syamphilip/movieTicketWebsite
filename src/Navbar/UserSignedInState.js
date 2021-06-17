import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Services/Firebase/Firebase";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../Services/Redux/FirebaseSlice";
import { setUserData } from "../Services/Redux/IsUserLoggedSlice";

export default function UserSignedInState() {
  const { Name } = useSelector((state) => state.firebaseUser);
  const { PhotoUrl } = useSelector((state) => state.firebaseUser);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      history.replace("/");
      dispatch(setUserData());
      dispatch(clearState());
    });
  };

  return (
    <nav
      className="flex bg-gray-900 md:h-36 h-48 justify-between px-10 flex-wrap md:flex-nowrap"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="w-full md:w-auto">
        <div className="text-yellow-500 font-thin text-3xl my-2 flex space-x-1">
          <div className="font-bold text-5xl">PAR </div>
          <div className="m-auto">Cinemas</div>
        </div>
        <div className="flex mt-5 justify-items-center">
          <div className="rounded-full">
            <img
              src={PhotoUrl}
              alt="propic"
              className="rounded-full h-14 w-14"
            />
          </div>
          <div>
            <div className="my-auto  mx-5 text-white font-normal  text-md mr-2">
              Hai,
            </div>
            <div className="my-auto  mx-5 text-yellow-500 font-bold  text-lg mr-2">
              {Name}
            </div>
          </div>
        </div>
      </div>

      <div className="flex m-auto space-x-2">
        <Link
          to="/Home"
          className="bg-yellow-500 p-2 rounded-sm  font-bold cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/MyTicket"
          className="bg-yellow-500 p-2 rounded-sm  font-bold cursor-pointer"
        >
          My Ticket
        </Link>
      </div>

      <div className="my-auto space-x-4 mx-5 text-yellow-500 font-bold text-md mr-2 cursor-pointer">
        <div
          className="border-yellow-500 border rounded-md p-2"
          onClick={handleSignOut}
        >
          Sign Out
        </div>
      </div>
    </nav>
  );
}
