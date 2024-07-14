import { GameManager } from './store';

// another instance of game manager
const gameManager = new GameManager()

export function startLogger() {
  setInterval(() => {
    gameManager.log()       // empty [] logs since this instance is not being updated
  }, 5000)
}