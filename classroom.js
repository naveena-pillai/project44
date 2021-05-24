class Classroom{
    constructor(){
        this.startButton = createButton('START');
    }
    display(){
        this.startButton.position(400,400);
        this.startButton.mousePressed(()=>{
            this.startButton.hide();
            text("May I go to the bathroom?",400, 550);
        })
    }
}