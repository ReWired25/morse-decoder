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
    let str = '';
    let arr = [];

    for (let i = 0; i < expr.length; i += 2) {
        arr.push(expr[i] + expr[i+1]);
    }

    let morseStr = ''

    arr.map((item, index) => {
        if (item === '**') {
            morseStr += '';
        } else if (item === '00') {
            morseStr += '';
        } else if (item === '10') {
            morseStr += '.';
        } else if (item === '11') {
            morseStr += '-';
        }
        if (index > 0 && (index + 1) % 5 === 0 && morseStr === '') {  
            str += ' ';
        } else if (index > 0 && (index + 1) % 5 === 0) {  
            str += MORSE_TABLE[morseStr];
            morseStr = '';
        }
    })

    return str;
}

module.exports = {
    decode
}