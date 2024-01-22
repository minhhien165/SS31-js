function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    } else {
        return str;
    }
}

console.log(truncate("Hello world, I'm Peter", 11));
