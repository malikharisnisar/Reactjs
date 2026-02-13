import { useState, useEffect } from "react";
import CarList from "./carlist.jsx";

function CarData() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  async function DataCar() {
    try {
      const response = await fetch(
        "https://mocki.io/v1/34b2f5c2-a964-4be0-a363-d6bc3572e223"
      );
      const result = await response.json(); // ✅ fixed
      setData(result);
    } catch (error) {
      alert("Something Went Wrong");
    }
  }

  useEffect(() => {
    DataCar();
  }, []);

  
  const filteredData = data.filter((car) => {
    const matchCountry =
      filter === "All" ||
      car.country.toLowerCase() === filter.toLowerCase();

    const matchSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCountry && matchSearch;
  });

  return (
  <div className="min-h-screen w-screen bg-gray-100 px-4 sm:px-6 md:px-10 py-6">

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 md:mb-8">
      Rental 🚗 Car
    </h1>

  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">

      <input
        type="text"
        placeholder="Search by car name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 border rounded-lg w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-3 border rounded-lg w-full md:w-1/4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="All">All Countries</option>
        <option value="china">China</option>
        <option value="czech">Czech</option>
        <option value="france">France</option>
        <option value="germany">Germany</option>
        <option value="italy">Italy</option>
        <option value="japan">Japan</option>
        <option value="malaysia">Malaysia</option>
        <option value="pakistan">Pakistan</option>
        <option value="south-korea">South Korea</option>
        <option value="sweden">Sweden</option>
        <option value="uk">Uk</option>
        <option value="usa">Usa</option>
      </select>
    </div>

    <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {filteredData.length > 0 ? (
        filteredData.map((car) => (
          <CarList key={car.id} car={car} />
        ))
      ) : (
        <div className="col-span-full w-full text-center">
  <p className="text-red-500 text-lg font-semibold">
    Loading Cars...
  </p>
</div>

      )}
    </div>
  </div>
);

}

export default CarData;
