nosex = 0;
nosey = 0;

function preload() {
    clownNose = loadImage("https://i.postimg.cc/CKB1hn1Z/Fake-Nose-NH-Icon.png");
}

function setup(){
    canvas = createCanvas (300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is ready to play the clown music!');
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x - 40;
        nosey = results[0].pose.nose.y - 35;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    //circle( nosex, nosey, 25);
    image(clownNose, nosex, nosey, 75, 75);
    //fill(255, 0, 0);

}

function takesnapshot(){
    save('FilterSelfie.png');
}

