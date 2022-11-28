import React from "react";
import T from './TopDestin.module.css'

export default function TopDestin () {
    return (
        <div>
            <div className={T.container}>
                <div className={T.container_flex}>
                    <div className={T.container_block}>Antalya</div>
                    <div className={T.container_block}>Alanya</div>
                    <div className={T.container_block}>Kemer</div>
                    <div className={T.container_block}>Side</div>
                    <div className={T.container_block}>Tazi Canyon</div>
                    <div className={T.container_block}>Capadoccia</div>
                    <div className={T.container_block}>Belek</div>
                    <div className={T.container_block}>Nevsehir</div>
                </div>
            </div>
        </div>
    )
}