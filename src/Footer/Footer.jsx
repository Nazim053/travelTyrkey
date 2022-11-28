import React from "react";
import F from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={F.Footer}>
      <div className={F.container}>
        <div className={F.container_top}>
          <div className={F.container_top_block}>NEED HELP?</div>
          <div className={F.container_top_block}>Travel Turkey</div>
          <div className={F.container_top_block}>travel-turkey</div>
          <div className={F.container_top_block}>Language</div>
        </div>
        <div className={F.container_midle}>
          <div className={F.container_midle_block}>
            <div className={F.container_midle_block_phone}>
              <div className={F.container_midle_block_text}>Call Us</div>
              <div className={F.container_midle_block_phone_number}>
                +7 *** 961 30232
              </div>
            </div>
            <div className={F.container_midle_block_mail}>
              <div className={F.container_midle_block_text}>Email for Us</div>
              <div className={F.container_midle_block_mail_adress}>
                nazim.ismailow20@gmail.com
              </div>
            </div>
            <div className={F.container_midle_block_social}>
              <div className={F.container_midle_block_text}>Follow Us</div>
              <div className={F.container_midle_block_social_flex}>
                <div className={F.container_icon}>f</div>
                <div className={F.container_icon}>t</div>
                <div className={F.container_icon}>y</div>
              </div>
            </div>
          </div>
          <div className={F.container_midle_block}>
            <div className={F.container_midle_block_link}>ABOUT US</div>
            <div className={F.container_midle_block_link}>
              DESTINATIONS OUR TOURS
            </div>
            <div className={F.container_midle_block_link}>AIRPORT TRANSFER</div>
            <div className={F.container_midle_block_link}>CAR RENTAL</div>
          </div>
          <div className={F.container_midle_block}>
            <div className={F.container_midle_block_link}>Account</div>
            <div className={F.container_midle_block_link}>Legal</div>
            <div className={F.container_midle_block_link}>Contact</div>
            <div className={F.container_midle_block_link}>AffiliateProgram</div>
            <div className={F.container_midle_block_link}>Privacy Policy</div>
          </div>
          <div className={F.container_midle_block}>
            <div className={F.container_midle_block_lang_flex}>
              <div className={F.container_midle_block_lang}>1</div>
              <div className={F.container_midle_block_lang}>2</div>
              <div className={F.container_midle_block_lang}>3</div>
              <div className={F.container_midle_block_lang}>4</div>
              <div className={F.container_midle_block_lang}>5</div>
              <div className={F.container_midle_block_lang}>6</div>
              <div className={F.container_midle_block_lang}>7</div>
              <div className={F.container_midle_block_lang}>8</div>
              <div className={F.container_midle_block_lang}>9</div>
            </div>
          </div>
        </div>
        <div className={F.container_footer}>
            <div className={F.block_copyright}>Copyright 2022 by Travel Tyrkey</div>
            <div className={F.block_copyright}>Logo</div>
        </div>
      </div>
    </div>
  );
}
