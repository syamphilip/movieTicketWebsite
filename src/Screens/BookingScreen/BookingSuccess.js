import React from "react";
import { useHistory } from "react-router-dom";

export default function BookingSuccess() {
  const history = useHistory();

  const handleSeeTicket = () => {
    history.replace("MyTicket");
  };

  return (
    <div style={{ backgroundColor: "#121212" }} className="flex p-60">
      <div className="m-auto justify-items-center">
        <div className="font-bold text-3xl text-yellow-500">
          congratulations
        </div>
        <div className="font-regular text-2xl text-white">
          ticket booked successfully
        </div>
        <div
          className="flex space-x-0 md:space-x-3 mt-3 bg-yellow-500 w-32 p-2 rounded-sm cursor-pointer"
          onClick={handleSeeTicket}
        >
          <div className="m-auto text-black font-bold">See My Ticket</div>
        </div>
      </div>
    </div>
  );
}
