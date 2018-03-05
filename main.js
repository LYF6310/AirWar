var __main = () => {
  images = {
    bg: 'img/bg.jpg',
    me: 'img/me.png'
  }
  var game = new Game(window.input,images,(g)=>{
    var scene = new Scene(g)
    g.runWithScene(scene)
  })

}
__main()
