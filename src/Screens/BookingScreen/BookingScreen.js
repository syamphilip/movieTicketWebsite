import React, { useState } from "react";
import { useSelector } from "react-redux";
import { db, auth } from "../../Services/Firebase/Firebase";
import { useHistory } from "react-router-dom";

export default function BookingScreen() {
  const movieDetails = useSelector((state) => state.UserMovie.movieDetails);

  const [totalPrice, settotalPrice] = useState(0);
  const [countPerson, setcountPerson] = useState(0);

  const history = useHistory();

  const handlePrice = (e) => {
    settotalPrice(e.target.value * 150);
    setcountPerson(e.target.value);
  };

  const handleBook = () => {
    if (countPerson !== 0) {
      db.collection(auth.currentUser.uid)
        .doc()
        .set({
          movieName: movieDetails.movieName,
          ticketPrice: totalPrice,
          countPerson: countPerson,
        })
        .then(() => {
          history.replace("BookingSuccess");
        });
    } else {
      alert("Some Thing is missing");
    }
  };

  return (
    <div style={{ backgroundColor: "#121212" }} className=" py-10">
      <div className="bg-black border-yellow-500 text-white  w-10/12 md:w-6/12 m-auto border-2 rounded-md p-5">
        <div className="text-xl font-bold">Ticket Booking </div>
        <div className="flex flex-wrap md:flex-nowrap md:space-x-5 space-x-0">
          <div className="h-4/6 w-4/6 md:w-2/6 md:h-2/6 mt-5 rounded-md border">
            <img alt="poster" src={movieDetails.moviePoster} />
          </div>
          <div className="mt-5">
            <div className="text-3xl font-bold">{movieDetails.movieName}</div>
            <div className="text-yellow-500 font-bold text-lg mt-5">
              Price per ticket : 150
            </div>
            <div className="flex space-x-0 md:space-x-3 mt-3">
              <div>enter person count</div>
              <div>
                <input
                  className="bg-black border-yellow-500 rounded-sm border-2 w-10 ml-3 md:ml-0"
                  onChange={(e) => handlePrice(e)}
                />
              </div>
            </div>
            <div className="flex space-x-0 md:space-x-3 mt-1">
              <div className="font-bold text-base text-yellow-500">Total :</div>
              <div className="font-bold text-base text-yellow-500">
                {totalPrice}
              </div>
            </div>
            <div
              className="flex space-x-0 md:space-x-3 mt-3 bg-yellow-500 w-20 p-2 rounded-sm cursor-pointer"
              onClick={handleBook}
            >
              <div className="m-auto text-black font-bold">Book</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
