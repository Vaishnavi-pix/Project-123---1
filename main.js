function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function gotPoses(result){
if(result.length>0){
    console.log(result);
}
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    background("#64d9b6");
}