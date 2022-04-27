import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGifId } from "../../Stores/gifId";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { Loading } from "../../component/Loading";
import "./style.css";
const GifDetail = () => {
  const dispatch = useDispatch();
  const { isLoading, isErr, gif } = useSelector((state) => state.gif);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getGifId(id));
  }, []);

  return (
    <div className="container">
      {isLoading === true ? (
        <Loading />
      ) : (
        gif?.data?.map((gif) => (
          <div className="wrapper">
            <img src={gif?.images?.original?.url} alt="" className="" />
            <div style={{ width: "500px", margin: "10px" }}>
              <h2>{gif?.user?.name}</h2>
              <h4>{gif?.title}</h4>
              <p style={{ textAlign: "left" }}>{gif?.user?.description}</p>
              <div className="icon-container">
                <a
                  href={gif?.user?.facebook_url}
                  target="_blank"
                  rel="noreferrer"
                  className="a-link"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href={gif?.user?.twitter_url}
                  target="_blank"
                  rel="noreferrer"
                  className="a-link"
                >
                  <AiOutlineTwitter />
                </a>
                <a
                  href={gif?.user?.instagram_url}
                  target="_blank"
                  rel="noreferrer"
                  className="a-link"
                >
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default GifDetail;
