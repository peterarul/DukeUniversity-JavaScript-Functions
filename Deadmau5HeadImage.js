// write your code here
function setColor(p,r,g,b){
    p.setRed(r);
    p.setGreen(g);
    p.setBlue(b);
    return p;
}

function distance(p,x,y){
    var dx = p.getX() - x;
    var dy = p.getY() - y;
    return Math.sqrt(dx * dx + dy * dy);
    
}
function black(){
    if((distance(pixel,cx+110,cy-115)<10) ||(distance(pixel,cx-100,cy-120)<10)
    ||(distance(pixel,cx-130,cy-80)<15) || (distance(pixel,cx-40,cy-20)<15) 
    || (distance(pixel,cx+40,cy-20)<15) )
    {
    p.setRed(0);
    p.setGreen(0);
    p.setBlue(0);
    }
}


var image = new SimpleImage(400,400);
var cx = image.getWidth()/2;
var cy = image.getHeight()/2;

for (var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var smallcricles = black();
    if(distance(pixel,cx-90,cy-80)<40){
    p = setColor(pixel,255, 212-2*distance(pixel,cx-90,cy-80), 0);
    }
    else if(distance(pixel,cx+90,cy-80)<40){
    p = setColor(pixel,255, 212-2*distance(pixel,cx+90,cy-80), 0);
    }
    else if(distance(pixel,cx,cy)<80){
    p = setColor(pixel,255-2*distance(pixel,150,cy), 212-2*distance(pixel,300,cy), 0);
    }
    else if (Math.random() > .990 ) {
        p =setColor(pixel,255,255,0);
    }
    
}

print(image);
