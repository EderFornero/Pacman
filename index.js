import { LEVEL, OBJECT_TYPE } from './setup';


import GameBoard from './GameBoard';
import Pacman from './Pacman';

// import soundDot from './sounds/munch.wav';
// import soundPill from './sounds/pill.wav';
// import soundGameStart from './sounds/game_start.wav';
// import soundGameOver from './sounds/death.wav';
// import soundGhost from './sounds/eat_ghost.wav';


const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');


const POWER_PILL_TIME = 10000; 
const GLOBAL_SPEED = 80; 
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;


// function playAudio(audio) {
//   const soundEffect = new Audio(audio);
//   soundEffect.play();
// }


function gameOver(pacman, grid) {
//   playAudio(soundGameOver);

//   document.removeEventListener('keydown', (e) =>
//     pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
//   );

//   gameBoard.showGameStatus(gameWin);

//   clearInterval(timer);
//   // Show startbutton
//   startButton.classList.remove('hide');
}

function checkCollision(pacman, ghosts) {
//   const collidedGhost = ghosts.find((ghost) => pacman.pos === ghost.pos);

//   if (collidedGhost) {
//     if (pacman.powerPill) {
//       playAudio(soundGhost);
//       gameBoard.removeObject(collidedGhost.pos, [
//         OBJECT_TYPE.GHOST,
//         OBJECT_TYPE.SCARED,
//         collidedGhost.name
//       ]);
//       collidedGhost.pos = collidedGhost.startPos;
//       score += 100;
//     } else {
//       gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);
//       gameBoard.rotateDiv(pacman.pos, 0);
//       gameOver(pacman, gameGrid);
//     }
//   }
}

function gameLoop(pacman, ghosts) {
  gameBoard.moveCharacter(pacman);

}


function startGame() {


  gameWin = false;
  powerPillActive = false;
  score = 0;

  startButton.classList.add('hide');

  gameBoard.createGrid(LEVEL);

  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener('keydown', (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );


  timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);
}

// Initialize game
startButton.addEventListener('click', startGame);