/**
 * Created by vicky on 2/27/2017.
 */

(function(){
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body;

//create an engine
    var engine = Engine.create();

//create a renderer
    var render = Render.create({
        element : document.body,
        engine : engine,
        options : {
            wireframes: false,
            width: 800,
            height: 980
        }
    });

//create a box and a ground
    var boxA = Bodies.rectangle(400,200,80,80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);

    var ground = Bodies.rectangle(400,910,810,60,{ isStatic : true});

//add All bodies to world
    World.add(engine.world , [boxA ,boxB , ground]);

//run the engine
    Engine.run(engine);

//run render
    Render.run(render);

    var canvas = document.querySelector('canvas');
    canvas.addEventListener('click', function(){

        World.add(engine.world , [Bodies.rectangle(450, 50, 80, 80), ground]);
        // var position = boxB.position;
        // var force = {
        //     x : 0,
        //     y : 1
        // };
        // Body.applyForce( boxB , position, force);
    })
})();
