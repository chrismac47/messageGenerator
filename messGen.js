// You will [verb] [adverb] today with [descriptive noun].


//Arrays of words to choose from:
const verbs = ['waltz', 'dance', 'frolic', 'float'];
const adverbs = ['happily', 'bouyantly', 'beautifully', 'delightfully'];
const nouns = ['aplomb', 'grace', 'generosity', 'pizazz', 'zest', 'charisma'];


//choose fill-in words
const verb = verbs[Math.floor(Math.random() * verbs.length)];
const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
const noun = nouns[Math.floor(Math.random() * nouns.length)];

const message = `You wil ${verb} ${adverb} today with ${noun}!`;



//Output
console.log(message);