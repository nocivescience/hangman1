let words = ['python', 'java', 'hangman', 'computer', 'keyboard', 'geography', 'coding'];
let gameWord = words[Math.floor(Math.random() * words.length)];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let generateUnderscore = () => {
    for(let i = 0; i < gameWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

let documentUnderScore = document.getElementById('wordSpotlight').textContent = underScore.join(' ');

window.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    if(gameWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        underScore[gameWord.indexOf(keyword)] = keyword;
        documentUnderScore = underScore.join(' ');
        document.getElementById('wordSpotlight').textContent = documentUnderScore;

        if(underScore.join('') == gameWord) {
            alert('You win');
        }
    } else {
        wrongWord.push(keyword);
    }
});

function resetGame() {
    location.reload();
}

generateUnderscore();