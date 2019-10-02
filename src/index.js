const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let decodedLetters = [];
  let decodedWords = '';

  for (var i = 0; i < expr.length; i += 10) {
      arr.push(expr.substring(i, i + 10));
  }
  for (let i = 0; i < arr.length; i++){
    decodedLetters.push([]);
    if (arr[i].includes(["**********"])){
        decodedLetters[decodedLetters.length - 1].push(' ');
    } else {
        for (let j = 0; j < arr[i].length - 1; j++){
          if (arr[i][j] == 1 && arr[i][j+1] == 0){
            decodedLetters[decodedLetters.length - 1].push('.');
          } else if (arr[i][j] == 1 && arr[i][j+1] == 1){
            decodedLetters[decodedLetters.length - 1].push('-');
            j++;
          } 
        }
      }
  }
  for (let i = 0; i < decodedLetters.length; i++){
    if (decodedLetters[i].join("") == ' '){
          decodedWords += ' ';
    } else {
          decodedWords += MORSE_TABLE[decodedLetters[i].join("")]; 
    }
  }
  return decodedWords;
    
}

module.exports = {
    decode
}