noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;



function setup() {
 
    video=createCapture(VIDEO);
 video.size(550,500);
 canvas=createCanvas(550,550);
 canvas.position(560,150);
 poseNet=ml5.poseNet(video,modelloaded);
 poseNet.on('pose', gotPoses);
}

function modelloaded() {

console.log('Kam kar gaya bhaii');
}

function gotPoses(results) {

    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference=floor(leftwristX-rightwristX);
    }

}

function draw() {

    background("black");
   document.getElementById("square_side").innerHTML="width and height of square will be :"+ difference + "px";
   fill("#e139ed");
   stroke("#595959");
   textSize(difference);
   Text(name,20,20);
}

var name="Urname";

function urname() {

    name=document.getElementById("urname").value;
}