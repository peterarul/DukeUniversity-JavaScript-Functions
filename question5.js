// write your code here
var image = new SimpleImage("usain.jpg");
var w = image.getWidth();
var h = image.getHeight();
for (var pixel of image.values()){
    if (pixelOnEdgeDifferentThicknesses(pixel,image,5,15))
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
function pixelOnEdgeDifferentThicknesses(pixel, image, verticalBorderWidth, horizontalBorderWidth) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < verticalBorderWidth || x > w-verticalBorderWidth || y < horizontalBorderWidth ||y >h-horizontalBorderWidth) return true;
    else return false;
}
print(image);
