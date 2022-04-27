import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGif } from "../../Stores/search";
const SearchField = () => {
  const [input, setInput] = useState("");
  const { results } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleSearchGif = () => {
    if (input) {
      dispatch(fetchGif(input));
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <input
            type="text"
            placeholder="search your gif"
            className="input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            data-testid="input-field"
          />
          <button className="submit-btn" data-testid="search-btn" onClick={handleSearchGif}>
            Submit
          </button>
        </div>
      </div>
      {results?.data?.length > 1 && <h3 className="search-complete">Search Result for {input} </h3>}
    </>
  );
};
export default SearchField;
