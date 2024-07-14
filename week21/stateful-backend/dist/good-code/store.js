"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
// export const games: Game[] = []
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
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
