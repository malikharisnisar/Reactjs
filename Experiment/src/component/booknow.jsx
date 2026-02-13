import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function BookNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  if (!car) {
    return (
      <h2 className="text-center text-xl font-semibold mt-10 text-gray-700">
        No Car Selected
      </h2>
    );
  }

  const handleBooking = () => {
  if (!pickupDate || !returnDate) {
    alert("Please select both dates");
    return;
  }

  const start = new Date(pickupDate);
  const end = new Date(returnDate);

  const diffTime = end - start;
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (totalDays <= 0) {
    alert("Return date must be after pickup date");
    return;
  }

  const totalAmount = totalDays * car.ratePerDay;

  const newBooking = {
    car,
    pickupDate,
    returnDate,
    totalDays,
    totalAmount,
  };

  // Get previous bookings from localStorage
  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // Add new booking
  existingBookings.push(newBooking);

  // Save back to localStorage
  localStorage.setItem("bookings", JSON.stringify(existingBookings));

  navigate("/yourbooking");
};

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center px-4">


      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        {/* Car Image */}
        <img
          src={car.pic}
          alt={car.name}
          className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg mb-6"
        />

        {/* Car Info */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{car.name}</h2>
        <p className="text-gray-600 mb-1">Model: {car.model}</p>
        <p className="text-gray-600 mb-1">Owner: {car.ownerName}</p>
        <p className="text-blue-600 font-bold text-lg mb-4">
          ${car.ratePerDay} / day
        </p>

        {/* Booking Form */}
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg">
 <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Pickup Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-700 transition-colors shadow-md"

          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
