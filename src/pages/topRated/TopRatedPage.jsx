import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import Carousel from "../../components/carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./style.scss";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <>
      <Header />
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Top Rated</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel endpoint={endpoint} data={data} loading={loading} />
      </div>
      <Footer />
    </>
  );
};

export default TopRated;
