import React from "react";
import L from './LookingAdventure.module.css'
import La from './LookingAdventure_adaptive.module.css'


export default function LookingAdventure () {
    return (
        <div className={L.container}>
            <div className={L.container_img}>
                <div className={`${L.bg_opacity} ${La.bg_opacity_adaptive}`}></div>
                <div className={L.container_flex}>
                    <div className={L.block_text}>Looking for a new adventure?</div>
                    <button className={L.block_button}>Contact Us and Discover</button>

                </div>
            </div>
        </div>
    )
}