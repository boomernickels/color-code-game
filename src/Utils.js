
export function colorIdToColor(id) {
    let color = "";
    switch (id) {
        case 0:
            color = "Unknown";
            break;
        case 1:
            color = "Red";
            break;
        case 2:
            color = "Blue";
            break;
        case 3:
            color = "Yellow";
            break;
        case 4:
            color = "Green";
            break;
        case 5:
            color = "White";
            break;
        case 6:
            color = "Black";
            break;
        default:
            color = "Unknown";
    }
    return color;
}

export function getRandomColorId() {
    let val = Math.floor(Math.random() * 10);
    while (val > 5) {
        val = Math.floor(Math.random() * 10);
    }
    return val + 1;
}
