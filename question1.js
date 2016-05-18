// write your code here
var image = new SimpleImage (200,200);
w = image.getWidth();
for (var pixel of image.values()) {
     x = pixel.getX();
     y = pixel.getY();
     
    if(x<w/2 && y < w/2 ){
        pixel.setRed(255);
    }
    if(x>w/2 && x<w && y<w/2){
        pixel.setGreen(255);
    }
    if(y>w/2 && x >w/2){
        pixel.setBlue(255);
    }
    if(y>w/2 && x<w/2){
        pixel.setBlue(255);
        pixel.setRed(255);
    }
   swapRedGreen(pixel);
}
function swapRedGreen(pixel){
    var red = pixel.getRed();
    var green = pixel.getGreen();
    pixel.setGreen(red);
    pixel.setRed(green);
    return pixel;
}


print(image);   

