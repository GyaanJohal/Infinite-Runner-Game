var PLAY = 1;
var END = 0;
var gameState = PLAY;

var cheetah, cheetah_running

var score=0



function preload(){
    cheetah_running = loadAnimation("Images/Cheetah_1.png", "Images/Cheetah_2.png", "Images/Cheetah_3.png", "Images/Cheetah_4.png", "Images/Cheetah_5.png", "Images/Cheetah_6.png", "Images/Cheetah_7.png", "Images/Cheetah_8.png", "Images/Cheetah_9.png", "Images/Cheetah_10.png", "Images/Cheetah_11.png", "Images/Cheetah_12.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 cheetah = createSprite()
}

function draw() {
 
}