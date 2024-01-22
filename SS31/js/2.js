function largestOfArrs(...arrays) {
    if (arrays.length === 0) {
        console.log([]);
        return;
    }

    for (const arr of arrays) {
        let largest = arr.length > 0 ? arr[0] : undefined;

        for (const num of arr) {
            if (num > largest) {
                largest = num;
            }
        }

        console.log(largest);
    }
}

largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]);
largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]);
largestOfArrs();
