import React, { useEffect, useState } from "react";
import { auth, db } from "../../Services/Firebase/Firebase";

export default function MyTicket() {
  const [Tickets, setTickets] = useState(null);

  useEffect(() => {
    db.collection(auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setTickets(documents);
      });
  }, [Tickets]);

  return (
    <div className="h-screen" style={{ backgroundColor: "#121212" }}>
      {Tickets.map((index) => {
        return (
          <div className="bg-gray-800">
            <div>{Tickets[index]}</div>
          </div>
        );
      })}
    </div>
  );
}
