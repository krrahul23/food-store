import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [filteredData, setFilteredData] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter-btn"
          onClick={() => {
            const tempData = restaurantList.filter((r) => r.data.avgRating > 4);
            setFilteredData(tempData);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filteredData.map((r, i) => (
          <RestaurantCard resData={r} key={r.data.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
