let character = document.getElementById("player");
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));
let ground = document.getElementById('ground');
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue(' bottom'));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue('height'));

let isJumping = false;
let upTime;
let downTime;
let scoreInterval;
let scoreDisplay = document.querySelector('.score-display');
let scoreDisplayGameOver = document.getElementById("game-over-score-display");
let score = 0;
let multiplier = 1;


function jump() {
    if (isJumping) return;
    upTime = setInterval(() => {
        if (characterBottom >= groundHeight + 250) {
            clearInterval(upTime);
            downTime = setInterval(() => {
                if (characterBottom <= groundHeight + 10) {
                    clearInterval(downTime)
                    isJumping = false
                }
                characterBottom -= 10;
                character.style.bottom = characterBottom + 'px';
            }, 20);
        }
        characterBottom += 10;
        character.style.bottom = characterBottom + 'px';
        isJumping = true;
    }, 20)
}

function createObstacles() {
    let obstacles = document.querySelector(".obstacles")
    let obstacle = document.createElement("div");
    obstacle.classList.add("obstacle")
    obstacle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    obstacles.appendChild(obstacle)


    let randomTimeout = Math.floor(Math.random() * 1000) + 1000
    let obstacleRight = -30;
    let obstacleBottom = 100;
    let obstacleWidth = 30;
    let obstacleHeight = Math.floor(Math.random() * 50) + 50

    function moveObstacles() {
        obstacleRight += 5;
        obstacle.style.right = obstacleRight + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        obstacle.style.width = obstacleWidth + 'px'
        obstacle.style.height = obstacleHeight + 'px'

        if (characterRight >= obstacleRight - characterWidth && characterRight <= obstacleRight + obstacleWidth && characterBottom <= obstacleBottom + obstacleHeight) {
            clearInterval(obstacleInterval);
            clearTimeout(obstacleTimeout);
            gameOver()
        }
    }

    let obstacleInterval = setInterval(moveObstacles, 20)
    let obstacleTimeout = setTimeout(createObstacles, randomTimeout)
}

function control(e) {
    if (e.key == 'ArrowUp' || e.key == ' ') {
        jump()
    }
}

function showScore() {
    score = score + 1 * multiplier;
    scoreDisplay.textContent = score;
}

scoreInterval = setInterval(showScore, 100)
document.addEventListener('keydown', control)







function gameOver() {
    clearInterval(scoreInterval)
    
    let scoreDisplayGameOver = document.getElementById("game-over-score-display");
    scoreDisplayGameOver.textContent = score;


    const overWindow = document.querySelector(".game-over");
    overWindow.style.display = "block";
}

function leave() {
    let scoreLocal = localStorage.getItem("score");
    let scoreLocalInt = parseInt(localStorage.getItem("score"))
    if (scoreLocal === null) {
        localStorage.setItem("score", score)
    } else {
        let newscore = scoreLocalInt + score;
        localStorage.setItem("score", newscore)
    };

    let BestscoreLocal = localStorage.getItem("BestScore");
    let BestscoreLocalInt = parseInt(BestscoreLocal)
    if (BestscoreLocalInt < score || BestscoreLocal === null) {
        localStorage.setItem("BestScore", score)
    } else {
        
    };

    const leveBTN = document.getElementById("leave-button-89132");
    leveBTN.textContent = "LEAVING..."
    setTimeout(() => {
        location.href = "./"
    }, 1000);
}
function restart() {
    let scoreLocal = localStorage.getItem("score");
    let scoreLocalInt = parseInt(localStorage.getItem("score"))
    if (scoreLocal === null) {
        localStorage.setItem("score", score)
    } else {
        let newscore = scoreLocalInt + score;
        localStorage.setItem("score", newscore)
    };

    let BestscoreLocal = localStorage.getItem("BestScore");
    let BestscoreLocalInt = parseInt(BestscoreLocal)
    if (BestscoreLocalInt < score || BestscoreLocal === null) {
        localStorage.setItem("BestScore", score)
    } else {
        
    };

    const leveBTN = document.getElementById("restart-button-55794");
    leveBTN.textContent = "Restarting..."
    setTimeout(() => {
        location.reload()
    }, 500);

}
var translations;

function translate(key, lang, translations) {
    return translations[lang][key];
}
function changeLanguage() {
    fetch('/dariosGame/assets/data/lang/language.json')
        .then(response => response.json()) // Analysiere die Antwort als JSON
        .then(data => {
            const html = document.getElementById("html");
            let lang = localStorage.getItem("lang");
            html.setAttribute("lang", lang);

            translations = data; // Speichere die Übersetzungen in der Variablen translations

            document.getElementById("restart-button-55794").innerHTML = translate("restart", lang, translations);
            document.getElementById("leave-button-89132").innerHTML = translate("leave", lang, translations);

            document.getElementById("game-over-text").innerHTML = translate("game_over", lang, translations);
            document.getElementById("score-game-over-text").innerHTML = translate("score", lang, translations);
            
            document.getElementById("").innerHTML = translate("", lang, translations);
        })
        .catch(error => {
            console.error('Error fetching translations:', error);
        });



}


function music() {
    let audio = new Audio("/dariosGame/assets/sfx/0816.MP3")
    audio.loop = true;
    audio.play()
}


music()
changeLanguage()
createObstacles()
