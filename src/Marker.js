import { colorIdToColor } from "./Utils";

function Marker({ colorId }) {
    return (
        <div className={colorIdToColor(colorId) + "-marker Marker"} />
    );
}

export default Marker;
