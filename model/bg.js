class bg {
  constructor(game,y){
    this.game = game
    log(this.game.images.bg)
    this.img = game.images.bg
    this.x = 2
    this.y = y
    this.vy = 0.5

  }
  movedown() {
    this.y += this.vy
  }
  reset() {
    this.y = -852
  }
}
