import { useState } from "react";

const CARS = ["tesla", "volkswagen", "audi", "merceds-benz", "toyata"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [car, setCar] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="car">
          Car
          <select
            id="car"
            value={car}
            onChange={(e) => setCar(e.target.value)}
            onBlur={(e) => setCar(e.target.value)}
          >
            <option />
            {CARS.map((car) => (
              <option value={car} key={car}>
                {car}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
