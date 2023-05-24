noseX = 0;
noseY = 0;
function preload() {
lipstick = loadImage('https://i.postimg.cc/j5rjqHbH/LIPPS.png');
}
function setup() {
    canvas = createCanvas(350,350);
    canvas.center()
    video= createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
image(video, 0, 0, 350, 350);
stroke(173, 216, 230);
fill(255, 127, 80);
image(lipstick, noseX, noseY, 40, 20);
}
function take_snapshot() {
    save('hey.png');
}

function modelLoaded() {
    console.log('The Model is Loaded!')
}

function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
    console.log("Nose X Coordinate =" + results[0].pose.nose.x);
    console.log("Nose Y Coordinate" + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x-25;
    noseY = results[0].pose.nose.y+13;
}
}