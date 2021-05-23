class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")

    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
    var title = createElement("h2")
    title.html("CAR RACING GAME")
    title.position(400,100)
    
    this.input.position(400,160)
    this.button.position(450,200)
    this.button.mousePressed(()=>{
        
        player.name = this.input.value()
        playercount+=1
        player.index = playercount
        player.update()
        player.updatecount(playercount)
        this.greeting.html("hello"+player.name)
        this.greeting.position(130,160)
        

    })


    }
}

