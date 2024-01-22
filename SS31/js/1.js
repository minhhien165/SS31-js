function findLongestWordLength(input_str) {
    let longestWord = "";
    let longestLength = 0;

    let currentWord = "";
    let currentLength = 0;

    for (const char of input_str) {
        if (char !== ' ') {
            currentWord += char;
            currentLength += 1;
        } else {
            if (currentLength > longestLength) {
                longestWord = currentWord;
                longestLength = currentLength;
            }

            currentWord = "";
            currentLength = 0;
        }
    }

    if (currentLength > longestLength) {
        longestWord = currentWord;
        longestLength = currentLength;
    }

    console.log([longestWord, longestLength]);
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");
