class Scene {
  constructor(game){
    this.game = game
    this.bg1 = new bg(this.game,0)
    this.bg2 = new bg(this.game,-852)
    this.bg2.width
  }
  update() {
    this.bg1.movedown()
    this.bg2.movedown()
    if(this.bg1.y>=852){
      //log(this.bg1.y,this.bg2.y)
      this.bg1.reset()
      //log(this.bg1.y,this.bg2.y)
    }
    if(this.bg2.y>=852){
      //log(this.bg1.y,this.bg2.y)
      this.bg2.reset()
      //log(this.bg1.y,this.bg2.y)
    }
  }
  draw() {
    //log(this.bg1.img)
    this.game.context.drawImage(this.bg1.img,this.bg1.x,this.bg1.y)
    this.game.context.drawImage(this.bg1.img,this.bg1.img.width,this.bg1.y)
    this.game.context.drawImage(this.bg2.img,this.bg2.x,this.bg2.y)
    this.game.context.drawImage(this.bg2.img,this.bg2.img.width,this.bg2.y)
    //this.game.context.draw(this.game.images[me])
  }
}
