import React from "react";
import C from './TrendingTours.module.css'

export default function TrendingTours () {
    return (
        <div className={C.TrendingTours}>
            <div className="block_tour">
                <h2></h2>
                <div className={C.block_tour_flex}>
                    <div className={C.block_tour_flex_containers}>
                        <div className={C.block_tour_flex_containers_img_alan}></div>
                        <div className={C.block_tour_flex_containers_text}>text</div>
                        <div className={C.block_tour_flex_containers_price}>price</div>
                    </div>
                    <div className={C.block_tour_flex_containers}>
                    <div className={C.block_tour_flex_containers_img_raft}>img</div>
                        <div className={C.block_tour_flex_containers_text}>text</div>
                        <div className={C.block_tour_flex_containers_price}>price</div>
                    </div>
                    <div className={C.block_tour_flex_containers}>
                    <div className={C.block_tour_flex_containers_img_kemer}>img</div>
                        <div className={C.block_tour_flex_containers_text}>text</div>
                        <div className={C.block_tour_flex_containers_price}>price</div>
                    </div>
                    <div className={C.block_tour_flex_containers}>
                    <div className={C.block_tour_flex_containers_img_antal}>img</div>
                        <div className={C.block_tour_flex_containers_text}>text</div>
                        <div className={C.block_tour_flex_containers_price}>price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}