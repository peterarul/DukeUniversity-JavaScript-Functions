var first = new SimpleImage("eastereggs.jpg");
var second = new SimpleImage("smallhands.png");
print("Original Images");
print("First: ","\n","width: ",first.getWidth(),"\n","Height: ",first.getHeight());
print("Second: ","\n","width: ",second.getWidth(),"\n","Height: ",second.getHeight());
print(first,second);

function crop(image,width,height) {
    var croppedimage = new SimpleImage(width,height);
    for (var pixel of croppedimage.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        var pix = image.getPixel(x,y);
        pixel.setRed(pix.getRed());
        pixel.setGreen(pix.getGreen());
        pixel.setBlue(pix.getBlue());
    }
    return croppedimage;
}

function pixchange(pixelValue){
    return Math.floor(pixelValue/16) * 16;
}

function chop2hide(image){
 for(var px of image.values()){
 px.setRed(pixchange(px.getRed()));
 px.setGreen(pixchange(px.getGreen()));
 px.setBlue(pixchange(px.getBlue()));
 }
 return image;
}


function shift(secondimage){
 var shiftimage = new SimpleImage(secondimage.getWidth(), 
 secondimage.getHeight());
 for(var pix of secondimage.values()){
 var x = pix.getX();
 var y = pix.getY();
 var shiftpix = shiftimage.getPixel(x,y);
 shiftpix.setRed(Math.floor(pix.getRed()/16));
 shiftpix.setGreen(Math.floor(pix.getGreen()/16));
 shiftpix.setBlue(Math.floor(pix.getBlue()/16));
 }
 return shiftimage;
}


var firstwidth = first.getWidth();
var firstheight = second.getHeight();
var secondwidth = second.getWidth();
var secondheight = second.getHeight();

if (secondwidth < firstwidth)
{
    firstwidth = secondwidth;
} 

if (secondheight < firstheight)
{
    firstheight = secondheight;
}


var croppedfirst = crop(first, firstwidth, firstheight);
var croppedsecond = crop(second, secondwidth, secondheight);
print("Cropped image");
print("First: ","\n","width: ",croppedfirst.getWidth(),"\n","Height: ",croppedfirst.getHeight());
print("Second: ","\n","width: ",croppedsecond.getWidth(),"\n","Height: ",croppedsecond.getHeight());
print(croppedfirst, croppedsecond);

var start = chop2hide(croppedfirst);
print(start);
var hide = shift(croppedsecond);
print(hide);



