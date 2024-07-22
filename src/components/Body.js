import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurantList.map((r, i) => (
          <RestaurantCard resData={r} key={r.data.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
