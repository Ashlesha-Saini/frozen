const Engine = matter.engine;
const World = matter.World;
const bodies = matter.bodies;

var engine,world;
var maxDrop;


function preload(){
Background ("black");

}

function setup(){
    CreateCanvas(1200,400);
engine=Engine.create();
world=Engine.world;

    
}

function draw(){
Background(backgroundImage);

}   

