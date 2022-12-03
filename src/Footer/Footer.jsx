import React from "react";
import F from "./Footer.module.css";
import Fa from "./Footer_adaptive.module.css";


export default function Footer() {
  return (
    <div className={F.Footer}>
      <div className={`${F.container} ${Fa.container_adaptive}`}>
        <div className={F.container_top}>
          <div className={`${F.container_top_block} ${Fa.container_top_block_adaptive}`}>NEED HELP?</div>
          <div className={`${F.container_top_block} ${Fa.container_top_block_adaptive}`}>Travel Turkey</div>
          <div className={`${F.container_top_block} ${Fa.container_top_block_adaptive}`}>travel-turkey</div>
          <div className={`${F.container_top_block} ${Fa.container_top_block_adaptive}`}>Language</div>
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
            <div className={F.container_midle_block_link}>ACCOUNT</div>
            <div className={F.container_midle_block_link}>LEGAL</div>
            <div className={F.container_midle_block_link}>CONTACT</div>
            <div className={F.container_midle_block_link}>AFFILIATEPROGRAM</div>
            <div className={F.container_midle_block_link}>PRIVACY POLICY</div>
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
          <div className={F.block_footer}>
          <div className={F.block_copyright}>
            Copyright 2022 by Travel Tyrkey
          </div>
          <div className={F.block_copyright}>Logo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
