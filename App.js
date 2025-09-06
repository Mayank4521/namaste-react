import React from "react";
import ReactDOM from "react-dom/client";

//Header
// -logo
// -nav-items
//Body
// -search-container
//   -input,button
// -res-container
//    -res-card
// Footer
//

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
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

const resList = [
{
"info": {
"id": "408505",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a3b08376-68d6-4984-819b-882c62e41afa_408505.JPG",
"locality": "Sewla Kalan",
"areaName": "Morowala",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.3,
"parentId": "547",
"avgRatingString": "4.3",
"totalRatingsString": "6.0K+",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 4,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "4.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/kfc-sewla-kalan-morowala-rest408505",
"type": "WEBLINK"
}
},
{
"info": {
"id": "78973",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4a85a758-8c72-4abf-9219-87df3fcce005_78973.JPG",
"locality": "Indira Nagar",
"areaName": "Ballupur",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.1,
"parentId": "721",
"avgRatingString": "4.1",
"totalRatingsString": "7.5K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 4.3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "810"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/pizza-hut-indira-nagar-ballupur-rest78973",
"type": "WEBLINK"
}
},
{
"info": {
"id": "343705",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/2946eb2a-1bda-43d9-ac23-67ea98ab2955_343705.JPG",
"locality": "Sector 4",
"areaName": "Gandhi Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.5,
"parentId": "2456",
"avgRatingString": "4.5",
"totalRatingsString": "2.2K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 0.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "0.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/dominos-pizza-sector-4-gandhi-nagar-rest343705",
"type": "WEBLINK"
}
},
{
"info": {
"id": "240107",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/fa3f4cd5-563b-4333-b0ae-cdc22f8367ff_240107.jpg",
"locality": "Rajpur Road",
"areaName": "Karanpur",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.4,
"parentId": "166",
"avgRatingString": "4.4",
"totalRatingsString": "24K+",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 2.6,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/burger-king-rajpur-road-karanpur-rest240107",
"type": "WEBLINK"
}
},
{
"info": {
"id": "608327",
"name": "The Belgian Waffle Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/373182e0-380f-4742-9d43-29a166f46abd_608327.JPG",
"locality": "Rajpur Road",
"areaName": "Chukkuwala",
"costForTwo": "₹200 for two",
"cuisines": [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
"avgRating": 4.6,
"veg": true,
"parentId": "2233",
"avgRatingString": "4.6",
"totalRatingsString": "1.6K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 23:45:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/the-belgian-waffle-co-rajpur-road-chukkuwala-rest608327",
"type": "WEBLINK"
}
},
{
"info": {
"id": "807972",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/683049ce-e9b0-4654-85b8-f5e428e672e1_807972.JPG",
"locality": "Rajpur Road",
"areaName": "Rajpur Road",
"costForTwo": "₹300 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages"
],
"avgRating": 4.6,
"parentId": "1040",
"avgRatingString": "4.6",
"totalRatingsString": "1.8K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 2.7,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.6",
"ratingCount": "62"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/theobroma-rajpur-road-rest807972",
"type": "WEBLINK"
}
},
{
"info": {
"id": "900538",
"name": "Olio - The Wood Fired Pizzeria",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/eac18fd4-91b1-4265-b3ec-86cf9a58d8ce_900538.JPG",
"locality": "Race Course",
"areaName": "Subhash Road",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Fast Food",
"Snacks",
"Beverages",
"Desserts"
],
"avgRating": 4.2,
"parentId": "11633",
"avgRatingString": "4.2",
"totalRatingsString": "1.4K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 06:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "33"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/olio-the-wood-fired-pizzeria-race-course-subhash-road-rest900538",
"type": "WEBLINK"
}
},
{
"info": {
"id": "671379",
"name": "Dunkin' - Donuts & Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/30/e9b2e100-8cac-4969-a294-9f7e88fab036_671379.jpg",
"locality": "Rabindra Nath Tagore Marg",
"areaName": "Centrio Mall",
"costForTwo": "₹250 for two",
"cuisines": [
"Desserts",
"Cafe",
"Bakery",
"Beverages",
"Fast Food"
],
"avgRating": 4.5,
"parentId": "2276",
"avgRatingString": "4.5",
"totalRatingsString": "808",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 4.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/dunkin-donuts-and-coffee-rabindra-nath-tagore-marg-centrio-mall-rest671379",
"type": "WEBLINK"
}
},
{
"info": {
"id": "628872",
"name": "Starbucks Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/171397c9-7b62-47ea-902b-e876d18e8610_628872.JPG",
"locality": "Hathibarkala",
"areaName": "Hathibarkala",
"costForTwo": "₹400 for two",
"cuisines": [
"Beverages",
"Cafe",
"Snacks",
"Desserts",
"Bakery",
"Ice Cream"
],
"avgRating": 4.5,
"parentId": "195515",
"avgRatingString": "4.5",
"totalRatingsString": "709",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 4.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "4.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "871"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/starbucks-coffee-hathibarkala-rest628872",
"type": "WEBLINK"
}
},
{
"info": {
"id": "69701",
"name": "Ellora's Melting Moments",
"cloudinaryImageId": "3bdf48e50f6b4d0031221401440defbb",
"locality": "Rajpur Road",
"areaName": "Rajpur Road",
"costForTwo": "₹500 for two",
"cuisines": [
"Bakery",
"Snacks",
"Desserts",
"Italian"
],
"avgRating": 4.6,
"parentId": "13689",
"avgRatingString": "4.6",
"totalRatingsString": "28K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 21:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "8.7K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/elloras-melting-moments-rajpur-road-rest69701",
"type": "WEBLINK"
}
},
{
"info": {
"id": "253768",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f05426f2-a35c-4c16-b0be-c7a3bb8e7d79_253768.JPG",
"locality": "Rajpur Road",
"areaName": "Karanpur",
"costForTwo": "₹400 for two",
"cuisines": [
"American"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "22K+",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 2.6,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹117"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "9.5K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/mcdonalds-rajpur-road-karanpur-rest253768",
"type": "WEBLINK"
}
},
{
"info": {
"id": "69747",
"name": "Anandam Express",
"cloudinaryImageId": "311282ca8bb87539502527657bd7bcf0",
"locality": "Karanpur",
"areaName": "Chukkuwala",
"costForTwo": "₹400 for two",
"cuisines": [
"Sweets",
"Chaat"
],
"avgRating": 4.6,
"parentId": "13945",
"avgRatingString": "4.6",
"totalRatingsString": "4.2K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 21:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "11"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/anandam-express-karanpur-chukkuwala-rest69747",
"type": "WEBLINK"
}
},
{
"info": {
"id": "69801",
"name": "Nanys Bakery",
"cloudinaryImageId": "w0kidct9etk1ak5y3ogv",
"locality": "East canal Road",
"areaName": "Hathibarkala",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Chinese",
"Italian",
"Continental"
],
"avgRating": 4.4,
"parentId": "13686",
"avgRatingString": "4.4",
"totalRatingsString": "19K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 3.6,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/nanys-bakery-east-canal-road-hathibarkala-rest69801",
"type": "WEBLINK"
}
},
{
"info": {
"id": "69061",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/caf13ff4-9cc6-4601-b2c0-822d90cb76d4_69061.jpg",
"locality": "Race Course",
"areaName": "Race Course",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.3,
"parentId": "2",
"avgRatingString": "4.3",
"totalRatingsString": "11K+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "1.8K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/subway-race-course-rest69061",
"type": "WEBLINK"
}
},
{
"info": {
"id": "793100",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
"locality": "Shastri nagar",
"areaName": "Pitambar plaza",
"costForTwo": "₹250 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "4961",
"avgRatingString": "4.3",
"totalRatingsString": "3.0K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 4.7,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 05:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹550 OFF",
"subHeader": "ABOVE ₹2499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/la-pinoz-pizza-shastri-nagar-pitambar-plaza-rest793100",
"type": "WEBLINK"
}
},
{
"info": {
"id": "365569",
"name": "Faasos - Wraps, Rolls & Shawarma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/5dff1597-343e-4a44-a242-ae42eb697232_365569.JPG",
"locality": "Back Side Area",
"areaName": "Rajpur Road",
"costForTwo": "₹200 for two",
"cuisines": [
"Kebabs",
"Fast Food",
"Snacks",
"American",
"Healthy Food",
"Desserts",
"Beverages"
],
"avgRating": 4.4,
"parentId": "21809",
"avgRatingString": "4.4",
"totalRatingsString": "5.9K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 4.8,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/faasos-wraps-rolls-and-shawarma-back-side-area-rajpur-road-rest365569",
"type": "WEBLINK"
}
},
{
"info": {
"id": "68758",
"name": "Nath'S Chinese",
"cloudinaryImageId": "e73f25b965f7bb1e80f2d64a03c234b1",
"locality": "Rajpur Road",
"areaName": "Hathibarkala Salwala",
"costForTwo": "₹400 for two",
"cuisines": [
"Chinese"
],
"avgRating": 4.3,
"parentId": "13608",
"avgRatingString": "4.3",
"totalRatingsString": "21K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 4.7,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "4.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Chinese.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Chinese.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/naths-chinese-rajpur-road-hathibarkala-salwala-rest68758",
"type": "WEBLINK"
}
},
{
"info": {
"id": "78799",
"name": "Ahuja'S Sweets & Dairy",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/25/dbfcef21-c267-492c-b2c6-e83ed3b9ba8a_78799 (1).jpg",
"locality": "Haridwar Road",
"areaName": "Dharampur",
"costForTwo": "₹250 for two",
"cuisines": [
"Sweets",
"Chinese",
"Snacks"
],
"avgRating": 4.3,
"veg": true,
"parentId": "28078",
"avgRatingString": "4.3",
"totalRatingsString": "5.5K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 4.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 21:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/ahujas-sweets-and-dairy-haridwar-road-dharampur-rest78799",
"type": "WEBLINK"
}
},
{
"info": {
"id": "74370",
"name": "Kathi Express (Vikas Mall,Indira Nagar)",
"cloudinaryImageId": "ioqtpqdpt4dri9bbhqlu",
"locality": "Balliwala",
"areaName": "Balliwala",
"costForTwo": "₹250 for two",
"cuisines": [
"Fast Food"
],
"avgRating": 4.4,
"parentId": "15746",
"avgRatingString": "4.4",
"totalRatingsString": "14K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 4.9,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-05 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Rolls.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Rolls.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "607"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/kathi-express-vikas-mall-indira-nagar-balliwala-rest74370",
"type": "WEBLINK"
}
},
{
"info": {
"id": "258058",
"name": "Walk In Woods",
"cloudinaryImageId": "shazu3f8od15s6wwwm28",
"locality": "Sudhowala",
"areaName": "Dharampur",
"costForTwo": "₹500 for two",
"cuisines": [
"North Indian",
"Chinese",
"Biryani"
],
"avgRating": 4.3,
"parentId": "7148",
"avgRatingString": "4.3",
"totalRatingsString": "17K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-06 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-North%20Indian.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-North%20Indian.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "1.1K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9436bf5-f183-4ff4-ab2f-aa7bac33ecfe"
},
"cta": {
"link": "https://www.swiggy.com/city/dehradun/walk-in-woods-sudhowala-dharampur-rest258058",
"type": "WEBLINK"
}
}
]

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Restaurant Name" />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        {/* <ResCard resData={resList[0]} />
        <ResCard resData={resList[1]} />
        <ResCard resData={resList[2]} />
        <ResCard resData={resList[3]} />
        <ResCard resData={resList[4]} />
        <ResCard resData={resList[5]} />
        <ResCard resData={resList[6]} />
        <ResCard resData={resList[7]} />
        <ResCard resData={resList[8]} /> */}
        {resList.map((restaurant)=>(
            <ResCard key={restaurant.info.id} resData={restaurant} ></ResCard>
        ))}
      </div>
    </div>
  );
};

const currYear = new Date().getFullYear();

const Footer = ()=> {
    return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made by <strong>Mayank</strong>
      </p>
    </footer>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
