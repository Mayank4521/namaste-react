import { CDN_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { resData} = props;

  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId
  } = resData?.info
  return (
    <div className="resCard">
      <img
        src= {CDN_IMG
            +cloudinaryImageId}
        alt="food-img"
      />
      <h2>{name}</h2>
      <div className="cuisineContain">
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}⭐</p>
      </div>
      <div className="timeContain">
        <p>Order In:</p>
        <p>{sla.deliveryTime} min</p>
      </div>
      <p>{costForTwo}</p>
    </div>
  );
};

export default ResCard;