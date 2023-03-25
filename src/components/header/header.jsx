import "./header.css";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import abc from "./keep_2020q4_48dp.png";
import { connect } from "react-redux";
import { navReducer } from "../../reducers/navReducer";
import "../header/header.css";

function HeaderFun(props) {
  const callFromHeader = () => {
    props.listenToHeader();
  };

  return (
    <div>
      <div className="originheader">
        <div className="mbh1">
          <div className="mbc11">
            <MenuIcon onClick={callFromHeader} />
          </div>

          <div className="mbc12">
            <img src={abc} height="65"></img>
          </div>
          <div className="mbc13">{props.title}</div>
        </div>

        <div className="mbh2">
          <div className="mbc21">
            <SearchIcon />
          </div>
          <p className="mbc22">Search</p>
        </div>

        <div className="mbh3">
          <div className="mbc31">
            <RefreshIcon />
          </div>
          <div className="mbc32">
            <ViewStreamIcon />
          </div>
          <div className="mbc33">
            <SettingsIcon />{" "}
          </div>
        </div>

        <div className="mbh4">
          <div className="mbc41">
            <AppsIcon />
          </div>
          <div className="mbc42">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

//export default HeaderFun;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    title: state.navReducer.title,
  };
};

export default connect(mapStateToProps)(HeaderFun);
