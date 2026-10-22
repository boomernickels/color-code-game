import { colorIdToColor } from "./Utils";

function Marker({ small, colorId }) {
    let markerSize = small ? "-small" : ""
    let markerIndicator = "Marker" + markerSize
    return (
        <div className={colorIdToColor(colorId) + "-marker " + markerIndicator} />
    );
}

export default Marker;
