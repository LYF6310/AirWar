class Game {
  constructor(fps,images,runCallback){
    this.images = images
    this.runCallback = runCallback
    this.scene = null
    this.actions = {}
    this.keydowns = {}
    this.canvas = document.getElementById('gcanvas')
    this.context = this.canvas.getContext('2d')
    //注册按键事件
    var self = this
    window.addEventListener('keydown', event => {
        this.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event){
        self.keydowns[event.key] = false
    })

    this.runloop = this.runloop.bind(this)
    this.init()
  }

  registerAction(key,callback) {
    this.actions[key] = callback
  }
  draw() {
    this.scene.draw()
  }
  update() {
    this.scene.update()
  }
  //循环绘制画面
  runloop() {
    //log(window.fps)
    var actions = Object.keys(this.actions)
    for (var i=0;i<actions.length;i++){
      let key = actions[i]
      if(this.keydowns[key]){
        this.actions[key]()
      }
    }
    // update
    this.update()
    // clear
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    // draw
    this.draw()
    // next run loop
    var g = this
    setTimeout(function(){
        g.runloop()
    }, 1000/window.fps)
  }

  __start() {
    this.runCallback(this)
  }
  runWithScene(s) {
    this.scene = s
    //log(this)
    this.runloop()

  }
  init() {
    var loads = []
    var names = Object.keys(this.images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = this.images[name]
        let img = new Image()
        img.src = path
        var g = this
        img.onload = function() {
            // 存入 g.images 中
            g.images[name] = img
            // 所有图片都成功载入之后, 调用 run
            loads.push(1)
            log('load images', loads.length, names.length,g.images[name])
            if (loads.length == names.length) {
                log('load images', g.images)
                g.__start()
            }
        }
    }
  }

}
