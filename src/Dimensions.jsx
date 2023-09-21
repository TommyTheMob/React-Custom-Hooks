import React from "react";
import {useDimensions} from "./useDimensions";
import './dimensions.scss'

const Dimensions = () => {
    const dimensions = useDimensions()
    return <div className="dimensions">{ `${dimensions.width}px - ${dimensions.height}px` }</div>
}

export default Dimensions