export const binarySearch = (array: Array<number>, target: number) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);

        if (array[middle] === target) {
            return middle;
        }

        if (array[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }

    };

    return -1;
}
