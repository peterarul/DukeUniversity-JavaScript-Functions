// write your code here
var image = new SimpleImage("usain.jpg");
var w = image.getWidth();
var h = image.getHeight();
for (var pixel of image.values()){
    if (pixelOnEdge(pixel,image,5))
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
function pixelOnEdge(pixel, image, bW) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < bW || y < bW || x > w-bW || y >h-bW) return true;
    return false;
}
print(image);
