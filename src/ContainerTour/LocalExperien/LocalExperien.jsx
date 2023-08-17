import React from "react";
import C from "./LocalExperien.module.css";
import Ca from "./LocalExperien_adaptive.module.css";


export default function LocalExperien() {
  return (
    <div className={C.LocalExperien}>
      <div className={C.block_tour}>
        <h2 className={`${C.title} ${Ca.title_adaptive}`}>Top Destinations</h2>
        <div className={`${C.container_tour_flex} ${Ca.container_tour_flex_adaptive}`}>
          <div className={`${C.cart} ${Ca.cart_adaptive }`}>
            <div className={C.overlay}>
              <button className={C.button}>
                <button className={C.a}>
                  Забронировать
                </button>
              </button>
            </div>
            <div className={C.cart_img}></div>
            <h1 className={C.cart_h1}>From Antalya: Tazi Canyon, Selge tour</h1>
            <div className={C.cart_block}>
              <h2 className={C.cart_h2}>No Review</h2>
              <div className={C.cart_flex}>
                <div className={C.cart_flex_block}>9 hours</div>
                <div>from $30,00</div>
              </div>
            </div>
          </div>

          <div className={`${C.cart} ${Ca.cart_adaptive }`}>
            <div className={C.overlay}>
              <button className={C.button}>
                <button className={C.a}>
                  Забронировать
                </button>
              </button>
            </div>
            <div className={C.cart_img2}></div>
            <h1 className={C.cart_h1}>
              5in1 Combo: Rafting, Jeep Ride, Zipline, Fishing, Quad/Buggy
            </h1>
            <div className={C.cart_block}>
              <h2 className={C.cart_h2}>No Review</h2>
              <div className={C.cart_flex}>
                <div>from $30,00</div>
              </div>
            </div>
          </div>
          <div className={`${C.cart} ${Ca.cart_adaptive }`}>
            <div className={C.overlay}>
              <button className={C.button}>
                <button className={C.a}>
                  Забронировать
                </button>
              </button>
            </div>{" "}
            <div className={C.cart_img3}></div>
            <h1 className={C.cart_h1}>Kemer Canyon Tour</h1>
            <div className={C.cart_block}>
              <h2 className={C.cart_h2}>No Review</h2>
              <div className={C.cart_flex}>
                <div>from $30,00</div>
              </div>
            </div>
          </div>
          <div className={`${C.cart} ${Ca.cart_adaptive }`}>
            <div className={C.overlay}>
              <button className={C.button}>
                <button className={C.a}>
                  Забронировать
                </button>
              </button>
            </div>
            <div className={C.cart_img4}></div>
            <h1 className={C.cart_h1}>
              From Antalya-Alanya: 2-Day Cappadocia Sightseeing Tour
            </h1>
            <div className={C.cart_block}>
              <h2 className={C.cart_h2}>No Review</h2>
              <div className={C.cart_flex}>
                <div className={C.cart_flex_block}>2 days</div>
                <div>from $90,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
