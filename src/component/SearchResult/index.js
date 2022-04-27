import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Loading } from "../Loading";
import { Link } from "react-router-dom";

const Result = () => {
  const { loading, error, results } = useSelector((state) => state.search);

  if (error === "An error occurred") {
    return (
      <div className="errorAlert">
        <h1>An error occurred</h1>
        <p>Please check your network connect and try again</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        {loading === true ? (
          <Loading />
        ) : (
          <div className="cardContainer">
            {results &&
              results?.data?.map((gif) => (
                <Link to={`/gif/${gif?.id}`} className="card ">
                  <img src={gif?.images?.original?.url} alt="" className="gif-img" />

                  <p className="title">{gif?.title}</p>
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Result;
