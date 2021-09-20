import React from "react";
import { Link } from "react-router-dom";


export const Nav = () => {
  return (
    <div className="nav">
      <div className="left-icons">
        <div className="logo-container">
          <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="logo" />
        </div>
        <input className="nav-search"  placeholder="Search Facebook"/>
      </div>

      <ul className="nav-links">
        <Link to="/">
          <li>
            <div className="home-icon-container">
              <img src="https://www.shareicon.net/data/256x256/2017/05/30/886507_home_512x512.png" alt="Home" />
            </div>
          </li>
        </Link>
        <Link to="/myevents">
          <li>
            <div className="save-icon-container">
              <img src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-67-512.png" alt="My Events" />
            </div>
          </li>
        </Link>

        <Link to="/watch">
          <li>
            <div className="watch-icon-container">
              <img src="https://st4.depositphotos.com/14695324/19792/v/950/depositphotos_197921056-stock-illustration-wathing-video-symbol-timeline-icon.jpg" alt="Watch" />
            </div>
          </li>
        </Link>

        <Link to="/groups">
          <li>
            <div className="groups-icon-container">
              <img src="https://static.thenounproject.com/png/2191465-200.png" alt="Groups" />
            </div>
          </li>
        </Link>
      </ul>

      <div className='right-icons'>
        <img className='messenger-icon' src="https://icon-library.com/images/facebook-messenger-icon-vector/facebook-messenger-icon-vector-21.jpg" alt="messenger" />
        <img className='notif-icon' src="https://i.dlpng.com/static/png/6725689_preview.png" alt="notif" />
        <img className='account-icon' src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png" alt="account" />
        <img className='menu-icon' src="http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png" alt="menu" />
      </div>
    </div>
  );
};
