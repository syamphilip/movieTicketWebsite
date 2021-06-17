import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedMovie } from "../../Services/Redux/BookingSlice";

export default function HomeMovieList() {
  const apiData = useSelector((state) => state.APIData.apiData);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  const dispatch = useDispatch();
  const history = useHistory();

  const handleNavigation = (movieDetails) => {
    dispatch(selectedMovie(movieDetails));
    history.push("/Booking");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 bg-black gap-5">
      {apiData.results.map((items, index) => {
        return (
          <div
            key={index}
            className="m-4 bg-blackrounded-md h-auto object-contain border-yellow-500 border-b-2"
          >
            <div className="h-5/6">
              <div className=" flex w-5/6 ">
                <img
                  src={imageUrl + items.poster_path}
                  className="h-3/6  rounded-md"
                  alt=""
                />
              </div>
              <div className="  text-white w-4/6 mt-5">
                <div className="text-lg font-bold flex">
                  {items.original_title}
                </div>
                <div>{items.release_date}</div>
                <div>Rateing : {items.vote_average}</div>
              </div>
            </div>

            <Link
              to="/Booking"
              className="flex justify-end"
              onClick={() =>
                handleNavigation({
                  movieName: items.original_title,
                  moviePoster: imageUrl + items.poster_path,
                })
              }
            >
              <div className="rounded-sm bg-yellow-500 p-1 w-24 my-5 flex justify-center cursor-pointer">
                <div className="font-bold">Book Now</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
