// write your code here
var image = new SimpleImage(200,200);
w = image.getWidth();
for (var pixel of image.values()) {
     x = pixel.getX();
     y = pixel.getY();
    if(x<w/2 && y < w/2 ){
        pixel.setRed(100);
    }
    if(x>w/2 && x<w && y<w/2){
        pixel.setGreen(255);
    }
    if(y>w/2 && x >w/2){
        pixel.setBlue(255);
    }
    if(y>w/2 && x<w/2){
        pixel.setBlue(255);
        pixel.setRed(100);
    }
    moreRed(pixel,200);
}
function moreRed(pixel,addred) {
    var red = pixel.getRed();
    
    if(red > 255){
        pixel.setRed(255);
    }
    else if (red+addred >255){
        pixel.setRed(255);
    }
}
print(image);
