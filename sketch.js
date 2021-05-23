 var database,form,player,game,playercount
 var gamestate = 0
 var allplayers


function setup(){
  database = firebase.database()
  createCanvas(400,400);
  game = new Game()
  game.getstate()
  game.start()
}
  

function draw(){
  background("white");
  if(playercount===4){
    game.update(1)
  }
  if(gamestate===1){
    clear()
    game.play()
  }
   
}