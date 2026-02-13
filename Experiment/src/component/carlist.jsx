import { useNavigate } from "react-router-dom";

function CarList({ car }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/book", { state: { car } });
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">

      <div className="relative overflow-hidden">
        <img
          src={car.pic}
          alt={car.name}
          className="w-full h-40 sm:h-48 md:h-52 object-cover"

        />
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow">
          ⭐ {car.rating}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">
          {car.name}
        </h3>

        <div className="text-gray-600 space-y-1 text-sm">
          <p>
            <span className="font-medium text-gray-700">Model:</span> {car.model}
          </p>
          <p>
            <span className="font-medium text-gray-700">Color:</span> {car.color}
          </p>
          <p>
            <span className="font-medium text-gray-700">Owner:</span> {car.ownerName}
          </p>
          <p>
            <span className="font-medium text-gray-700">Country:</span> {car.country}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl sm:text-2xl font-bold text-blue-600">
            ${car.ratePerDay}
            <span className="text-sm text-gray-500 font-normal"> /day</span>
          </p>
        </div>

        <button
          onClick={handleBook}
          className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default CarList;
