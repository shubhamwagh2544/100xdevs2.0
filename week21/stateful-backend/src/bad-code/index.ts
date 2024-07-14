import { games } from './store';
import { startLogger } from './logger';

// log state every 5 sec
startLogger()

// updating state every 5 sec (realtime achieved by websockets)
setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: "Shubham",
    blackPlayerName: "Wagh",
    moves: []
  })
}, 5000)