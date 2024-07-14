"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
// export const games: Game[] = []
// one way: dont export class (only export single instance created)
// other way: singleton pattern
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        // create a single GameManager instance
        if (GameManager.instace) {
            return GameManager.instace;
        }
        GameManager.instace = new GameManager();
        return GameManager.instace;
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: "Shubham",
            blackPlayerName: "Wagh",
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
//export const manager = new GameManager()
