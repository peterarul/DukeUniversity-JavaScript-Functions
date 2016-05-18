// write your code here
var image = new SimpleImage("usain.jpg");
var w = image.getWidth();
var h = image.getHeight();
for (var pixel of image.values()){
    if (pixelOnVerticalEdge(pixel,image,5) || pixelOnHorizontalEdge(pixel,image,15))
    {
       pixel = setBlack(pixel);
    }
}
function setBlack(pix) {
    pix.setRed(0);
    pix.setGreen(0);
    pix.setBlue(0);
    return pix;
}
function pixelOnVerticalEdge(pixel, image, bW) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < bW || x > w-bW) return true;
    else return false;
}
function pixelOnHorizontalEdge(pixel, image, bW) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (y < bW ||y >h-bW) return true;
    else return false;
}
print(image);
