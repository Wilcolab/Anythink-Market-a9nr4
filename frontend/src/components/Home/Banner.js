import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const onSearchChange = (event) => {
    props.onSearchFilter(
      event.target.value,
      (page) => agent.Items.byTitle(event.target.value, page),
      agent.Items.byTitle(event.target.value)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex justify-content-center">
          <span>A place to </span>

          <span
            id="get-part"
            className="mx-2"
            onClick={() => {
              if (!searchVisible) setSearchVisible(true);
              else setSearchVisible(false);
            }}
          >
            get
          </span>

          {searchVisible && (
            <form className="mx-2 w-50">
              <input
                type="text"
                className="form-control"
                id="search-box"
                aria-describedby="searchBox"
                placeholder="What do you truly desire ?"
                name="term"
                onChange={onSearchChange}
              />
            </form>
          )}

          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
