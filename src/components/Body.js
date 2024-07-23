import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

let filteredData = [];

const Body = () => {
  let listOfRestaurant = [
    {
      data: {
        type: "F",
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,

        avgRating: "4.5",
        totalRatings: 1000,
        new: false,
      },
    },
    {
      data: {
        type: "F",
        id: "74458",
        name: "KFC",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,

        avgRating: "3.8",
        totalRatings: 1000,
        new: false,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = listOfRestaurant.filter((r) => r.data.avgRating > 4);
            console.log(filteredData);
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
