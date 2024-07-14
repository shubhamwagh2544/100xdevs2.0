interface Game {
  id: string
  whitePlayerName: string
  blackPlayerName: string
  moves: string[]
}

// export const games: Game[] = []

// one way: dont export class (only export single instance created)
// other way: singleton pattern

export class GameManager {
  
  games: Game[] = [];
  private static instace: GameManager;

  private constructor() {
    this.games = []
  }

  static getInstance() {
    // create a single GameManager instance
    if (GameManager.instace) {
      return GameManager.instace
    }
    GameManager.instace = new GameManager()
    return GameManager.instace
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

//export const manager = new GameManager()