var canvas,bg ;
var mouse , mouse1 , mouse2 ;
var cat , cat1 , cat2 ;


function preload() {
   
    bg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseImg2= loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");
    //alert("h11");
}

function setup() {
    //alert("h123");
    canvas  = createCanvas(1000,800);
//alert("hi");
    cat = createSprite(870,600);
    cat.addAnimation("catSitting",catImg1);
    cat.scale = 0.2;
    
    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;

}

function draw () {

    background(bg) ;
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catlastImage",catImg3)
        cat.X = 300;
        cat.scale = 0.2 
        cat.changeAnimation("tomLastImage")

        mouse.addAnimation("mouseLastImage",mouseImg3)
        mouse.scale = 0.15
        mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
}   

function keyPressed() {
    //alert("ha");
    if(keyCode === LEFT_ARROW){
       cat.velocityX = -5 
       cat.addAnimation("catrunning",catImg2);
       cat.changeAnimation("catrunning");

       mouse.addAnimation("mouseteasing",mouseImg2);
       mouse.frameDelay = 25; 
       mouse.changeAnimation("mouseteasing");
    }
}

