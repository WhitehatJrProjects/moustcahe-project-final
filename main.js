nose_x = 0;
nose_y = 0;

function preload() {
  moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Intialized');
}

function gotPoses(results){
  if(results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
  }
}


function draw() {
  image(video, 0, 0, 350, 350);
  image(moustache, nose_x, nose_y + 30, 60, 45);
}

function take_snapshot() {
    save('my_filter_image.png');
}