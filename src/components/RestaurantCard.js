import { CDN_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { area, name, avgRating, cuisines, cloudinaryImageId } = resData?.data;
  //   const area = props.data.area;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img src={CDN_URL + cloudinaryImageId} className="res-logo"></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{area}</h5>
    </div>
  );
};

export default RestaurantCard;
