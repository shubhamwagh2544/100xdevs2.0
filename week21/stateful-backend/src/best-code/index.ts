import { startLogger } from './logger';
import { GameManager } from './store';

// log state every 5 sec
startLogger()

// even if we export single instance from game manager to everyone
// new devs can create a new instance from game manager and it won't oppose them (only if class is exported)
// const gamemanager = new GameManager()

// Solution: We create singleton instance of GameManager
const gamemanager = GameManager.getInstance()

// updating state every 5 sec (realtime achieved by websockets)
setInterval(() => {
  gamemanager.addGame(Math.random().toString())
}, 5000)