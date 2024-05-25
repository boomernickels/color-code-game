import { colorIdToColor } from "./Utils";

function Marker({ small, colorId }) {
    let markerIndicator = "Marker" + (small ? "-small" : "")
    return (
        <div className={colorIdToColor(colorId) + "-marker " + markerIndicator} />
    );
}

export default Marker;
