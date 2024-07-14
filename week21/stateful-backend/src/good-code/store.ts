interface Game {
  id: string
  whitePlayerName: string
  blackPlayerName: string
  moves: string[]
}

// export const games: Game[] = []

export class GameManager {
  games: Game[] = []
  constructor() {
    this.games = []
  }

  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`)
    const game = this.games.find(game => game.id === gameId)
    if (game) {
      game.moves.push(move)
    }
  }

  addGame(gameId: string) {
    const game = {
      id: gameId,
      whitePlayerName: "Shubham",
      blackPlayerName: "Wagh",
      moves: []
    }
    this.games.push(game)
  }

  log() {
    console.log(this.games)
  }
}