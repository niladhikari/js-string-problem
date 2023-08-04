const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
const parts = lyrics.split(' '); // Separate the word  and give the output
const sentences = lyrics.split('.') //after the dot  it separates the sentences
const chars = lyrics.split('');    // It outputs all letters and spaces separately
// console.log(chars);

const partial = lyrics.slice(5, 8);

// console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'Bosonto kale tomai bolte pari ni',
    'Kala kala sada sada',
    'Rong jomeche sada kala'
  ];

const newSong = lines.join('. ')
console.log(newSong)