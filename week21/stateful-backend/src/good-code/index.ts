import { startLogger } from './logger';
import { GameManager } from './store';

// log state every 5 sec
startLogger()

// create a new game manager class instance
const gameManager = new GameManager()

// updating state every 5 sec (realtime achieved by websockets)
setInterval(() => {
  gameManager.addGame(Math.random().toString())   // this instance adds a new game
}, 5000)