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

        // Reemplaza todas las ocurrencias de la letra adivinada
        for(let i = 0; i < gameWord.length; i++) {
            if(gameWord[i] === keyword) {
                underScore[i] = keyword;
            }
        }

        documentUnderScore = underScore.join(' '); // Actualiza el texto en el HTML
        document.getElementById('wordSpotlight').textContent = documentUnderScore;

        if(underScore.join('') == gameWord) {
            alert('You win');
        }
    } else {
        wrongWord.push(keyword);
    }
});