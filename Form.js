class Form {
  constructor() {
    this.input = createInput("Name");
    this. button = createButton('Play');
    this. greeting = createElement('h3');
    this. title = createElement('h2')
  }

  display(){
    
    title.html("Car Racing Game");
    title.position(displayWidth/2,50);
    
    input.position(displayWidth/2, displayHeight/2);
    button.position(displayWidth/2, displayHeight/2+100);

   this.button.mousePressed(()=>{
      input.hide();
      button.hide();
     //greeting.hide();
      //title.hide();

      var name =this.input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
     
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
