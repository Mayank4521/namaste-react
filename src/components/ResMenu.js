import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json.data)
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return (
      <h1>
        <Shimmer />
      </h1>
    );
  }

  const { name, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const regularCards = resInfo?.cards?.find(
    (c) => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ;
  const menuCard = regularCards?.find(
    (c) => c?.card?.card?.itemCards);
  const itemCards = menuCard?.card?.card?.itemCards || [];

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {avgRating}⭐ . {costForTwoMessage}
      </p>
      <h2>Recommended</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResMenu;
