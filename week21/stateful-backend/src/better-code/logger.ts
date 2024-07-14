import { manager } from "./store"

// another instance of game manager

export function startLogger() {
  setInterval(() => {
    manager.log()
  }, 5000)
}