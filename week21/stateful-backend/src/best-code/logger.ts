import { GameManager } from "./store"

// single instance of GameManager
const gamemanager = GameManager.getInstance()

export function startLogger() {
  setInterval(() => {
    gamemanager.log()
  }, 5000)
}