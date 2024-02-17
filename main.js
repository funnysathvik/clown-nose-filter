nosex = 0;
nosey = 0;
function preload(){
nos = loadImage('https://i.postimg.cc/NFZPYW28/th-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose',posne);
}


function modelloaded(){
    console.log("load");
}

function posne(results){
    if(results.length >0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
    }


}
function draw(){
    image(video,0,0,300,300);
    image(nos , nosex-180 , nosey-110 , 50, 50);
}