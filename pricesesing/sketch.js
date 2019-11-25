function setup(){
    var canvas = createCanvas(500,300);
    canvas.parent('sketch-holder')
    
    act1 = true;
    for (let i = -1; i<12; i++) {
        for (let j = -1; j < 6; j++) {
     ho= int(random(0,2));
    if(ho === 0){
            rect(25*i,25*j,25,25,5)
           fill(255,0,0);
        }else{
            rect(25*i,25*j,25,25,5)
           fill(0,255,0);
    
        }
    }
    }
    }
    function draw(){
    
    function mouseClicked(){
    
    }
    }