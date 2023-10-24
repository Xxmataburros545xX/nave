var fondo, fondoImg;
var jefeGrande, jefeGrandeImg, jefeGroup;
var disparoLaser, disparoLaserImg, disparoGroup;
var planetaGarkov, planetaGarkovImg;
var naveEnemiga, naveEnemigaImg, naveEnemigaGroup;
var naveEnemigaCombate, naveEnemigaCombateImg, navedeCombateGroup;
var naveJugador, naveJugadorImg, JugadorGroup;
var gameState = "story"

function preload(){

 jefeGrandeImg = loadImage ("JEFE-GRANDE.png");
 naveEnemigaImg = loadImage ("nave_enemiga.png");
 naveEnemigaCombateImg = loadImage ("nave_enemiga_combate.png");
 fondoImg = loadImage ("fondo-espacial.jpeg");
 disparoLaserImg = loadImage ("disparo_laser.png");
 naveJugadorImg = loadImage ("nave_espacial.png");
 planetaGarkovImg = loadImage ("planeta_garkov.png");
 disparoLaserSound = loadSound ("sonido_disparo.mp3");
 soundtrack = loadSound ("soundtrack.mp3")
}

function setup() {
 createCanvas (800,600)
 soundtrack.loop();
 fondo = createSprite(300,300);
 fondo.addImage("fondo",fondoImg);
 fondo.velocityY = 5;
fondo.scale = 3.5;

 JugadorGroup = new Group();
 jefeGroup = new Group();
 naveEnemigaGroup = new Group();
 navedeCombateGroup = new Group();
 disparoGroup = new Group();

 naveJugador = createSprite(500,300,20,20)
 naveJugador.scale = 0.3;
 naveJugador.addImage("jugador", naveJugadorImg);
} 

function draw() {
 background(255)
 if(fondo.y > 600){
    fondo.y = 0
 } 
 
 if (gameState === "play") {
    jugador.y = World.mouseY



 }
 
 drawSprites();




}




