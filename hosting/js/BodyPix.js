
var image = null;

function upload() {
  //Get input from file input
  var fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  image = new SimpleImage(fileinput);
  //Get canvas
  var canvas = document.getElementById("can");
  //Draw image on canvas
  image.drawTo(canvas);
}

async function shyn(){
  var net = await bodyPix.load(0.5);
  console.log(image)
  var segmentation = await net.estimatePersonSegmentation(image.imageData);
  var mask = segmentation.data;
  console.log(segmentation)
  var i = 0;
  for (var pixel of image.values()) {
    if(!mask[i]){
      var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    i++;
  }
  //display new image
  var canvas = document.getElementById("can2");
  image.drawTo(canvas);
  return true;
}
    