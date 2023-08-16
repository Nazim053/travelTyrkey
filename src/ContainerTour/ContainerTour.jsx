import React from "react";
import C from './ContainerTour.module.css'
import LocalExperien from "./LocalExperien/LocalExperien";
import TopDestin from "./TopDestin/TopDestin";
import TrendingTours from "./TrendingTours/TrendingTours";

export default function ContainerTour () {
    return (
        <div className={C.containerTour}>
            <TrendingTours />
            <TopDestin />
            <LocalExperien />
        </div>
    )
}