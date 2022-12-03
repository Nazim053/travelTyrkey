import React from "react";
import h from "./Header.module.css";
import ha from './Header_adaptive.module.css'

import {
  FaShoppingCart,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaCalendarDay,
} from "react-icons/fa";

import {Link} from "react-router-dom";

export default function Header() {

  return (
    <div className={h.container}>
      <div className={h.container_flex_top}>
        <div className={h.flex_block_email}>nazim.ismailow20@gmail.com</div>
        <div className={h.flex_block_sign}>
          <ul className={h.list_ul}>
            <li className={h.flex_li}>+79613023432</li>
            <li className={h.flex_li}>login</li>
            <li className={h.flex_li}>Sign Up</li>
            <li className={h.flex_li}>EUR</li>
          </ul>
        </div>
      </div>
      <div className={h.container_menu}>
        <div className={h.logo}></div>
        <div className={h.menu}>
          <ul className={h.menu_ul}>
            <li className={h.menu_li}>About us</li>
            <li className={h.menu_li}>Our Tours</li>
            <li className={h.menu_li}>Destinations</li>
            <li className={h.menu_li}>Airport Transfer</li>
            <li className={h.menu_li}>Car Rental</li>
          </ul>
        </div>
        <div className={h.cart}>
            <div className={h.cart_container_icon}>
            <Link to="/cart">{<FaShoppingCart/>}</Link>
            </div>
            <main>
            </main>
          <div className={h.cart_container_count}></div>
          <div className={h.cart_container_us}>Contact Us</div>
        </div>
      </div>
      <div className={h.container_baner}>
        <div className={h.container_baner_img}>
          <div className={h.bg_opacity}></div>
          <div className={h.container_text}>
            <h1 className={h.container_text_h1}>Love where you're going</h1>
            <h3 className={h.container_text_h3}>
              Book incredible things to do around the Tyrkey
            </h3>
          </div>
        </div>
      </div>
      <div className={`${h.container_searсh}`}>
        <div className={`${h.container_search_flex_block} ${ha.container_search_flex_block_adaptive}`}>
          <div className={h.container_search_block}>
          <div className={`${h.container_search_block_flex} ${ha.container_search_block_flex_adaptive}`}>
              <div className={h.container_search_block_flex_icon}>
                {<FaMapMarkerAlt />}
              </div>
              <div className={h.container_search_block_flex_text}>
                <span className={h.container_search_block_flex_text_sp1}>
                  Loaction
                </span>
                <span className={h.container_search_block_flex_text_sp2}>
                  Where are yiu going?
                </span>
              </div>
            </div>
          </div>
          <div className={h.container_search_block}>
          <div className={`${h.container_search_block_flex} ${ha.container_search_block_flex_adaptive}`}>
              <div className={h.container_search_block_flex_icon}>
                {<FaRegCalendarAlt />}
              </div>
              <div className={h.container_search_block_flex_text}>
                <span className={h.container_search_block_flex_text_sp1}>
                  Date
                </span>
                <span className={h.container_search_block_flex_text_sp2}>
                  Add date
                </span>
              </div>
            </div>
          </div>
          <div className={h.container_search_block}>
            <div className={`${h.container_search_block_flex} ${ha.container_search_block_flex_adaptive}`}>
              <div className={h.container_search_block_flex_icon}>
                {<FaCalendarDay />}
              </div>
              <div className={h.container_search_block_flex_text}>
                <span className={h.container_search_block_flex_text_sp1}>
                  Check out
                </span>
                <span className={h.container_search_block_flex_text_sp2}>
                  Add date
                </span>
              </div>
            </div>
          </div>
          <div className={h.container_search_block}>
          <div className={`${h.container_search_block_flex} ${ha.container_search_block_flex_adaptive}`}>
              <div className={`${h.container_search_block_flex_search} ${ha.container_search_block_flex_search_adaptive}`}>Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
