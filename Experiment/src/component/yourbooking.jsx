import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function YourBooking() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  // Load bookings
  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleCancel = (index) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (confirmCancel) {
      const updatedBookings = [...bookings];
      updatedBookings.splice(index, 1);

      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      setBookings(updatedBookings);
    }
  };

  const grandTotal = bookings.reduce((sum, booking) => {
    return sum + booking.totalAmount;
  }, 0);

  if (bookings.length === 0) {
    return (
      <h2 className="text-center mt-10 text-xl font-semibold">
        No Bookings Found
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 w-screen px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
        Your Bookings
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {bookings.map((booking, index) => {
          const {
            car,
            pickupDate,
            returnDate,
            totalDays,
            totalAmount,
          } = booking;

          const lateChargePerDay = car.ratePerDay * 1.5;

          return (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md"
            >
              <img
                src={car.pic}
                alt={car.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-gray-600">Model: {car.model}</p>
              <p className="text-gray-600">Owner: {car.ownerName}</p>
              <p className="text-blue-600 font-bold">
                ${car.ratePerDay} / day
              </p>

              <hr className="my-3" />

              <p><strong>Pickup:</strong> {pickupDate}</p>
              <p><strong>Return:</strong> {returnDate}</p>
              <p><strong>Total Days:</strong> {totalDays}</p>
              <p className="text-green-600 font-bold">
                Total: ${totalAmount}
              </p>

              <div className="mt-3 bg-red-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">
                  Late Charge Per Day:
                </p>
                <p className="font-bold text-red-500">
                  ${lateChargePerDay}
                </p>
              </div>

              <button
                onClick={() => handleCancel(index)}
                className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Cancel Booking
              </button>
            </div>
          );
        })}
      </div>

      {/* ✅ Grand Total Section */}
      <div className="mt-8 bg-blue-50 p-6 rounded-xl max-w-md mx-auto text-center shadow-md">
        <h2 className="text-xl font-bold text-blue-700">
          Grand Total
        </h2>
        <p className="text-2xl font-bold text-green-600 mt-2">
          ${grandTotal}
        </p>
      </div>
    </div>
  );
}

export default YourBooking;
