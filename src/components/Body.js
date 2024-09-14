import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9890119&lng=77.6664976&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestaurantData(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredData(restaurantData);
  }, [restaurantData]);
  if (restaurantData.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}></input>
          <button
            onClick={() => {
              const temp = restaurantData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredData(temp);
              console.log(temp);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const tempData = restaurantData.filter(
              (r) => r?.info?.avgRating > 4
            );
            setFilteredData(tempData);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filteredData.map((r, i) => (
          <RestaurantCard resData={r} key={r.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
