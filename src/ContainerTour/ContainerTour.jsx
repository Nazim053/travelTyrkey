import React from "react";
import C from './ContainerTour.module.css'
import TrendingTours from "./TrendingTours/TrendingTours";

export default function ContainerTour () {
    return (
        <div className={C.containerTour}>
            <TrendingTours />
        </div>
    )
}