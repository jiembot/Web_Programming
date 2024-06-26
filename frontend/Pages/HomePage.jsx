import React from "react";
import CustomCarousel from "../Components/Carousel";
import { data, shopData } from "../sampleData";
import BookingProfile from "../Components/BookingProfile";
import ShopItem from "../Components/ShopItem";
import { useLocation } from "react-router-dom";
import ArtistCard from "../Components/ArtistCard";
import { useFetch } from "../Hook/useFetch";

const HomePage = () => {
  const sampleImage = [
    { id: "img1", url: "https://i.ytimg.com/vi/jfMjbVIGzYc/maxresdefault.jpg" },
    { id: "img2", url: "https://i.ytimg.com/vi/tMcYSxFYmGI/maxresdefault.jpg" },
    { id: "img3", url: "https://i.ytimg.com/vi/nPZWNsFXqs8/maxresdefault.jpg" },
  ];

  const artistData = useFetch(`${import.meta.env.VITE_SERVER_ENDPOINT}/profile/artist`);
  
  return (
    <div className="mx-0   xl:mx-[15%]">
      <CustomCarousel image={sampleImage} />

      <h1 className="text-center text-2xl my-8">More Artists</h1>

      <div className="flex justify-center flex-wrap gap-5">
        {artistData.map((artist) => (
          <ArtistCard
            key={artist._id}
            id={artist._id}
            name={artist.stageName}
            image={artist.image}
          />
        ))}
      </div>

      <h1 className="text-center text-2xl my-8">Shop Our Latest Merchandise</h1>

      <div className="flex justify-center flex-wrap gap-5">
        {shopData.slice(0, 5).map((shop, index) => (
          <ShopItem
            key={index}
            name={shop.name}
            image={shop.displayImage}
            price={230}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
