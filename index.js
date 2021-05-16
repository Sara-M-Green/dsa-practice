// Count the number of word occurences
// Input `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`

function wordOccurences(str) {
    let words = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(' ')
    let occurences = {}

    words.forEach(word => {
        if (!occurences[word]) {
            occurences[word] = 0
        }
        occurences[word] += 1
    })

    return console.log(occurences)
}

wordOccurences('Hello there, how are you? Can you tell me how to get to the nearest Starbucks?')