function analyzeSentence(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;
    let isFirstChar = true;

    for (let i = 0; i < sentence.length; i++) {
        length++;

        const char = sentence[i];
        const isLetter = /[a-zA-Z]/.test(char);

        if (isLetter) {
            if (isFirstChar || char === ' ') {
                words++;
            }
            isFirstChar = false;

            if ('aeiouAEIOU'.includes(char)) {
                vowels++;
            }
        }

        if (char === '.') {
            break; // Exit the loop when reaching the end of the sentence
        }
    }

    return { length, words, vowels };
}

// Example usage:
const sentence = "This is a sample sentence.";
const { length, words, vowels } = analyzeSentence(sentence);
console.log("Length:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);
