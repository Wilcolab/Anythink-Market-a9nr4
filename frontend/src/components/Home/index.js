import Banner from "./Banner";
import MainView from "./MainView";
import React, { useEffect } from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  APPLY_TITLE_FILTER,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onSearch: (title, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

const Home = ({ onLoad, onUnload, tags, onClickTag, onSearch }) => {
  const tab = "all";
  const itemsPromise = agent.Items.all;

  useEffect(() => {
    onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
    return onUnload;
  }, [onLoad, onUnload, tab, itemsPromise]);

  return (
    <div className="home-page">
      <Banner onSearchFilter={onSearch} />

      <div className="container page">
        <Tags tags={tags} onClickTag={onClickTag} />
        <MainView />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
