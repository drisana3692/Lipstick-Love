function preload() {

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
}
}