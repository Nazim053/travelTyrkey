import React from "react";
import T from './TopDestin.module.css'
import Ta from './TopDestin_adaptive.module.css'


export default function TopDestin () {
    return (
        <div>
            <div className={T.container}>
                <div className={`${T.container_flex} ${Ta.container_flex_adaptive}`}>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Antalya</div>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Alanya</div>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Kemer</div>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Side</div>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Tazi Canyon</div>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Capadoccia</div>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Belek</div>
                    <div className={`${T.container_block} ${Ta.container_block_adaptive}`}>Nevsehir</div>
                </div>
            </div>
        </div>
    )
}