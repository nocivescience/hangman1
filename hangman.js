let word = [
    'python',
    'java',
    'hangman',
    'computer',
    'keyboard',
    'geography',
    'coding'
];
let gameWord = word[Math.floor(Math.random() * word.length)];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let generateUnderscore = () => {
    for (let i = 0; i < gameWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
};
let documentUnderScoreElement = document.getElementById('wordSpotlight');
let keyboardElement = document.getElementById('keyboard');
let documentUnderScore = documentUnderScoreElement.textContent = generateUnderscore().join(' '); // Actualiza el texto en el HTML
window.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    if (gameWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        // Reemplaza todas las ocurrencias de la letra adivinada
        for (let i = 0; i < gameWord.length; i++) {
            if (gameWord[i] === keyword) {
                underScore[i] = keyword; // Actualiza el texto en el HTML
            }
        }
        documentUnderScore = underScore.join(' ');
        documentUnderScoreElement.textContent = documentUnderScore;
        if (underScore.join('') == gameWord) {
            alert('You win');
        }
    }else {
        wrongWord.push(keyword);
    }
});
const resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', () => {
    rightWord = [];
    wrongWord = [];
    underScore = [];
    gameWord = word[Math.floor(Math.random() * word.length)];
    documentUnderScore = documentUnderScoreElement.textContent = generateUnderscore().join(' ');
    keyboardElement.textContent = '';
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i);
        let button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => {
            if (gameWord.indexOf(letter) > -1) {
                rightWord.push(letter);
                for (let i = 0; i < gameWord.length; i++) {
                    if (gameWord[i] === letter) {
                        underScore[i] = letter;
                    }
                }
                documentUnderScore = underScore.join(' ');
                documentUnderScoreElement.textContent = documentUnderScore;
                if (underScore.join('') == gameWord) {
                    alert('You win');
                }
            }else {
                wrongWord.push(letter);
            }
        });
        keyboardElement.appendChild(button);
    }
});