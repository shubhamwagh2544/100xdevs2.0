import { startLogger } from './logger';
import { manager } from './store';

// log state every 5 sec
startLogger()

// updating state every 5 sec (realtime achieved by websockets)
setInterval(() => {
  manager.addGame(Math.random().toString())
}, 5000)