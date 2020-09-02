var array1=[]
var x=5,Bullet,Shooted=0,create=0,stage=1,killed=0
function setup() {
createCanvas(windowWidth,windowHeight);
Bullet=createGroup();
obstacleg=createGroup();
Gun=createSprite(windowWidth-100,Math.round(random(0,windowHeight)),40,40);
Gun.shapeColor="Pink"
up=createButton("⬆");
shootbullet=createButton("🌠");
down=createButton("⬇");     
down.position(windowWidth-150,windowHeight-40);
shootbullet.position(windowWidth-150,windowHeight-70);
up.position(windowWidth-150,windowHeight-100);
}

function draw() {
  background("black");  
  fdraw();
}

function shoot(){
  if(keyDown("Space")){
    if(Shooted===0){
      Shooted=1
      bullet=createSprite(Gun.x,Gun.y,40,10)
      bullet.velocityX=-15
      bullet.shapeColor="yellow"
      Bullet.add(bullet);
     }
   }
   shootbullet.mousePressed(()=>{
    if(Shooted===0){
      Shooted=1
      bullet=createSprite(Gun.x,Gun.y,40,10)
      bullet.velocityX=-15
      bullet.shapeColor="yellow"
      Bullet.add(bullet);
     }
   } )
    
   }
  

function movegun(){
  if(keyDown("up")){
   Gun.y=Gun.y-10
  }
  up.mousePressed(()=>{
    Gun.y=Gun.y-10
   } )
  if(keyDown("down")){
   Gun.y=Gun.y+10
  }
  down.mousePressed(()=>{
    Gun.y=Gun.y+10
   } )
}

function properties(Sprite){
  Sprite.x=(windowWidth-windowWidth+50)
  Sprite.velocityX=1
  Sprite.shapeColor="GREEN"
 }

function createobstacles(theme){
  obstacle=createSprite(windowWidth-windowWidth+10,random(10,windowHeight-10),50,50)
  obstacle.velocityX=4
  obstacle.shapeColor="RED"
  obstacleg.add(obstacle);
  create=create+1;
}

function crzombie(Sprite){
  Sprite=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
  properties(Sprite);      
}

// kzombie function Not Working
/*function kzombie(name){
  if(name.isTouching(Bullet)){
    name.destroy();
    console.log(killed)
    killed=killed+1
  } 
}*/

function fdraw(){
  textSize(20);
    if(stage===1){
      if(create===0){
         create=1
         zombie1=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
         properties(zombie1);
         zombie2=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
         properties(zombie2);
         zombie3=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
         properties(zombie3);
         zombie4=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
         properties(zombie4);
         zombie5=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
         properties(zombie5);
         zombie6=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
         properties(zombie6);  
        }
      shoot();
      
      if(zombie1.isTouching(Bullet)){
        zombie1.destroy();
        console.log(killed);
        killed=killed+1
      } 
      if(zombie2.isTouching(Bullet)){
        zombie2.destroy();
        console.log(killed)
        killed=killed+1
      } 
      if(zombie3.isTouching(Bullet)){
        zombie3.destroy();
        console.log(killed)
        killed=killed+1
      } 
      if(zombie4.isTouching(Bullet)){
        zombie4.destroy();
        console.log(killed)
        killed=killed+1
      } 
      if(zombie5.isTouching(Bullet)){
        zombie5.destroy();
        console.log(killed)
        killed=killed+1
      } 
      if(zombie6.isTouching(Bullet)){
        zombie6.destroy();
        console.log(killed)
        killed=killed+1
      } 
      if(killed>=6){
        stage=stage+1;
        console.log(stage);
        console.log("Stage Won")
        create=0;
        killed=0;
      }
     }
      if(stage===2){
        if(create===0){
          create=1
          zombie7=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie7);
          zombie8=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie8);
          zombie9=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie9);
          zombie10=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie10);
          zombie11=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie11);
          zombie12=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie12);  
          zombie13=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie13);
          zombie14=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie14);
          zombie15=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
          properties(zombie15);      
        }
        shoot();
         
        if(zombie7.isTouching(Bullet)){
          zombie7.destroy();
          console.log(killed);
          killed=killed+1
        } 
        if(zombie8.isTouching(Bullet)){
          zombie8.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(zombie9.isTouching(Bullet)){
          zombie9.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(zombie10.isTouching(Bullet)){
          zombie10.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(zombie11.isTouching(Bullet)){
          zombie11.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(zombie12.isTouching(Bullet)){
          zombie12.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(zombie13.isTouching(Bullet)){
          zombie13.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(zombie14.isTouching(Bullet)){
          zombie14.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(zombie15.isTouching(Bullet)){
          zombie15.destroy();
          console.log(killed)
          killed=killed+1
        } 
        if(killed>=9){
          stage=stage+1;
          console.log(stage);
          console.log("Stage Won")
          create=0;
          killed=0;
        }
          }
        /*if(stage===3){
          if(World.frameCount%30==0 && create<=30){
            createobstacles();
          }
          if(create>=30){
          stage=stage+1;
          console.log(stage);
          console.log("Stage Won")
          create=0;
          killed=0;
          }
           }*/
        if(stage===3){
          if(World.frameCount%30==0 && create<=60){
            createobstacles();
          }
          if(create>=60){
          stage=stage+1;
          sstage=1
          console.log(stage);
          console.log("Stage Won")
          create=0;
          killed=0;
          }
           }
       
  
        if(Shooted===0){
          fill("Green")
          text("Reloaded",displayWidth/2-100,displayWidth/2-300);
        }
        if(Shooted===1){
          fill("Red")
          text("Reloading",displayWidth/2-100,displayWidth/2-300);
        }
        if(stage===4){   
          if(sstage==1){
            if(create===0){
              create=1
              zombie16=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie16);
              zombie17=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie17);
              zombie18=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie18);
              zombie19=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie19);
              zombie20=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie20);
              zombie21=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie21);  
              zombie22=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie22);
              zombie23=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie23);
              zombie24=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie24);    
              zombie25=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie25);
              zombie26=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie26);
              zombie27=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie27);
              zombie28=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie28);
              zombie29=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie29);
              zombie30=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
              properties(zombie30);                        
            }
            shoot();
             
            if(zombie16.isTouching(Bullet)){
              zombie16.destroy();
              console.log(killed);
              killed=killed+1
            } 
            if(zombie17.isTouching(Bullet)){
              zombie17.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie18.isTouching(Bullet)){
              zombie18.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie19.isTouching(Bullet)){
              zombie19.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie20.isTouching(Bullet)){
              zombie20.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie21.isTouching(Bullet)){
              zombie21.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie22.isTouching(Bullet)){
              zombie22.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie23.isTouching(Bullet)){
              zombie23.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie24.isTouching(Bullet)){
              zombie24.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie25.isTouching(Bullet)){
              zombie25.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie26.isTouching(Bullet)){
              zombie26.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie27.isTouching(Bullet)){
              zombie27.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie28.isTouching(Bullet)){
              zombie28.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie29.isTouching(Bullet)){
              zombie29.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(zombie30.isTouching(Bullet)){
              zombie30.destroy();
              console.log(killed)
              killed=killed+1
            } 
            if(killed>=15){
              sstage=2;
              console.log(stage);
              console.log("Stage Won")
              create=0;
              killed=0;
            }
          }
          if(sstage==2){
            if(World.frameCount%30==0 && create<=60){
              createobstacles();
            }
            if(create>=60){
            stage=stage+1;
            console.log(stage);
            console.log("Stage Won")
            create=0;
            killed=0;
            }
          }
        }
              
         
        if(Shooted===0){
          fill("Green")
          text("Reloaded",displayWidth/2-100,displayWidth/2-300);
        }
        if(Shooted===1){
          fill("Red")
          text("Reloading",displayWidth/2-100,displayWidth/2-300);
        }
        if(Shooted===1 && World.frameCount%15==0){
          Shooted=0;
        }

        movegun();
        drawSprites();
      }
    