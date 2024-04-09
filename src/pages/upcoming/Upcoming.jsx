import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import "./style.scss";

const Upcoming = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  console.log(data);
  return (
    <>
      <Header />
      <div className="upcomingPage">
        {loading ? (
          <Spinner initial={true} />
        ) : (
          <>
            <h1>Upcoming Movies</h1>
            <ul>
              {data?.results.map((m) => {
                return (
                  <li key={m.id}>
                    <MovieCard fromSearch={false} data={m} mediaType="movie" />;
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Upcoming;
