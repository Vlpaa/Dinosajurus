kaboom({
    width:1050,
    height:450,
    font: "sinko",
    canvas: document.querySelector('#mycanvas')

})

loadSprite("t-rex","t-rex.png")
loadSprite("background", "background.png" )
loadSprite("cactus", "cactus.png")

loadSound("jump","jump.mp3")
loadSound("hit", "hit.mp3")

FLOOR_HEIGHT=10
JUMP_FORCE=800
SPEED=480

scene("game", () =>{
    gravity(2400)
    add([
        rect(width(),FLOOR_HEIGHT),
        pos(0,height(-FLOOR_HEIGHT)),
        area(),
        solid()
    ])

    add([
        sprite("background",{
            width:width(),
            height:height(),
        })
        
    ])

    trex=add([
        sprite("t-rex"),
        pos(80,40),
        solid(),
        body()
    ])
    onKeyPress("space",jump)
    function jump(){
        if(trex.isGrounded()){
            Play("jump")
            trex.jump(JUMP_FORCE)
        }
    }

    spawnCactus()

    function spawnCactus(){
        add([
            sprite("cactus"),
            area(),
            pos(width(),height()-FLOOR_HEIGHT),
            origin("botleft"),
            move(LEFT,SPEED),
            "tree"

           ])
        wait(rand(0.5, 1.5), spawnCactus)
    }



})






