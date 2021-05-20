song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet  = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotposes);
}

function gotposes(result){
if(result.length > 0){
	console.log(result);

	leftwristx = result[0].pose.leftWrist.x;
	leftwristy = result[0].pose.leftWrist.y;
	console.log("leftwristx = "+ leftwristx + "leftwristy ="+ leftwristy);


	rightwristx = result[0].pose.rightWrist.x;
	rightwristy = result[0].pose.rightWrist.y;
	console.log("rightwristx = "+ rightwristx + "rightwristy ="+ rightwristy);
}

}


function modelLoaded(){
	console.log("model is initialized")
}

function draw() {
	image(video, 0, 0, 600, 500);

	
}

function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
	
}
