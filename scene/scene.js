class Scene {
  constructor(game){
    this.game = game
    this.bg = new bg(this.game)

  }
  update() {
    this.bg.move()
  }
  draw() {
    this.game.context.drawImage(this.)
    //this.game.context.draw(this.game.images[me])
  }
}
