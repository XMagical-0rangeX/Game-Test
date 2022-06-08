//game

//setup
let cnv = document.getElementById("screen");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1500;

//global variables
let shipX = 450;
let lineY = 1290;
let lineY2 = 1290;
let lineY3 = 1290;
let lineY4 = 1290;
let lineY5 = 1290;
let animate = false;
let animate2 = false;
let animate3 = false;
let animate4 = false;
let animate5 = false;
let copy = 0;
let copy2 = 0;
let copy3 = 0;
let copy4 = 0;
let copy5 = 0;
let score = 0;
let ufoY = 0;
let ufoX = Math.random() * 1000;
let highscore = 0;
let uforight = true;
let ufoleft = false;
let ufoY2 = 0;
let ufoX2 = Math.random() * 1000;
let uforight2 = true;
let ufoleft2 = false;
let ufoY3 = 0;
let ufoX3 = Math.random() * 1000;
let uforight3 = true;
let ufoleft3 = false;
let meatX = 0;
let meatY = Math.random() * 1000 + 150;
let meatleft = false;
let meatright = true;
let health = 100;
let lazerX, lazerY = 0;
let alive = true;
let lazershoot = false;
let lazerX2, lazerY2 = 0;
let lazershoot2 = false;
let lazerX3, lazerY3 = 0;
let lazershoot3 = false;
let dead = false;
let shipXspeed = 0;



//store img
let spaceback = document.getElementById("space-jpg");
let shipcont = document.getElementById("shipcon");
let ranufo = document.getElementById("ufo");
let ranmeat = document.getElementById("meat");



document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

//ctx.drawImage(spaceback, 20, 20, 100, 100);
//main program
requestAnimationFrame(loop);
function loop() {
    if (alive){
    //background
    ctx.drawImage(spaceback, 0, 0, cnv.width, cnv.height);


    if(animate){
        lineY -= 5;
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(copy +43, lineY);
      ctx.lineTo(copy +43, lineY+20);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(copy +57, lineY);
      ctx.lineTo(copy +57, lineY+20);
        ctx.stroke();
        
        if (lineY <= 0){
            animate = false;
            lineY = 1290;
        } 
    }
    if(animate2){
      lineY2 -= 5;
      ctx.strokeStyle = "red";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(copy2 +43, lineY2);
    ctx.lineTo(copy2 +43, lineY2+20);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(copy2 +57, lineY2);
    ctx.lineTo(copy2 +57, lineY2+20);
      ctx.stroke();
      
      if (lineY2 <= 0){
          animate2 = false;
          lineY2 = 1290;
      } 
    }
    if(animate3){
    lineY3 -= 5;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(copy3 +43, lineY3);
    ctx.lineTo(copy3 +43, lineY3+20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(copy3 +57, lineY3);
    ctx.lineTo(copy3 +57, lineY3+20);
    ctx.stroke();
    
    if (lineY3 <= 0){
        animate3 = false;
        lineY3 = 1290;
    } 
    }
    if(animate4){
    lineY4 -= 5;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(copy4 +43, lineY4);
  ctx.lineTo(copy4 +43, lineY4+20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(copy4 +57, lineY4);
  ctx.lineTo(copy4 +57, lineY4+20);
    ctx.stroke();
    
    if (lineY4 <= 0){
        animate4 = false;
        lineY4 = 1290;
    } 
  }
  if(animate5){
    lineY5 -= 5;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(copy5 +43, lineY5);
    ctx.lineTo(copy5 +43, lineY5+20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(copy5 +57, lineY5);
    ctx.lineTo(copy5 +57, lineY5+20);
    ctx.stroke();
    
    if (lineY5 <= 0){
        animate5 = false;
        lineY5 = 1290;
    } 
  }
  //UFO
    ctx.drawImage(ranufo, ufoX, ufoY, 100,75);
    if (ufoY < 1000){
      ufoY += 1;
    } if (ufoleft) {
      ufoX -= 2;
    } if (uforight) {
      ufoX += 2;
    } if (ufoX >= 875) {
      uforight = false;
      ufoleft = true;
    } if (ufoX <= 25) {
      uforight = true;
      ufoleft = false;
    } 
  
  if (copy <= ufoX+100 && copy >= ufoX && lineY <= ufoY +75 && lineY >= ufoY){ 
    lineY = 0;
    ufoY = 0;
    score += 100;
  } else if (copy2 <= ufoX+100 && copy2 >= ufoX && lineY2 <= ufoY +75 && lineY2 >= ufoY) {
    lineY2 = 0;
    ufoY = 0;
    score += 100;
  } else if (copy3 <= ufoX+100 && copy3 >= ufoX && lineY3 <= ufoY +75 && lineY3 >= ufoY) {
    lineY3 = 0;
    ufoY = 0;
    score += 100;
  } else if (copy4 <= ufoX+100 && copy4 >= ufoX && lineY4 <= ufoY +75 && lineY4 >= ufoY) {
    lineY4 = 0;
    ufoY = 0;
    score += 100;
  } else if (copy5 <= ufoX+100 && copy5 >= ufoX && lineY5 <= ufoY +75 && lineY5 >= ufoY) {
    lineY5 = 0;
    ufoY = 0;
    score += 100;
  }
  if(lazershoot){
    lazerY += 3;
    ctx.strokeStyle = "green";
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(lazerX , lazerY );
    ctx.lineTo(lazerX , lazerY+80);
    ctx.stroke();
    
    if (lazerY <= 0){
        lazershoot = false;
        lazerY = 0;
    } 
  } if (lazerY >= 1500){
    lazerY = 0;
  } if (lazerY == 0) {
    lazerX = ufoX + 50;
    lazerY = ufoY + 60;
    lazershoot = true;
  } 
  
    ctx.drawImage(ranufo, ufoX2, ufoY2, 100,75);
    if (ufoY2 < 1000){
      ufoY2 += 1;
    } if (ufoleft2) {
      ufoX2 -= 2;
    } if (uforight2) {
      ufoX2 += 2;
    } if (ufoX2 >= 875) {
      uforight2 = false;
      ufoleft2 = true;
    } if (ufoX2 <= 25) {
      uforight2 = true;
      ufoleft2 = false;
    } 
  
  if (copy <= ufoX2+100 && copy >= ufoX2 && lineY <= ufoY2 +75 && lineY >= ufoY2){
    lineY = 0;
    ufoY2 = 0;
    score += 100;
  } else if (copy2 <= ufoX2+100 && copy2 >= ufoX2 && lineY2 <= ufoY2 +100 && lineY2 >= ufoY2) {
    lineY2 = 0;
    ufoY2 = 0;
    score += 100;
  } else if (copy3 <= ufoX2+100 && copy3 >= ufoX2 && lineY3 <= ufoY2 +100 && lineY3 >= ufoY2) {
    lineY3 = 0;
    ufoY2 = 0;
    score += 100;
  } else if (copy4 <= ufoX2+100 && copy4 >= ufoX2 && lineY4 <= ufoY2 +100 && lineY4 >= ufoY2) {
    lineY4 = 0;
    ufoY2 = 0;
    score += 100;
  } else if (copy5 <= ufoX2+100 && copy5 >= ufoX2 && lineY5 <= ufoY2 +100 && lineY5 >= ufoY2) {
    lineY5 = 0;
    ufoY2 = 0;
    score += 100;
  }
  //shoot2
  if(lazershoot2){
    lazerY2 += 3;
    ctx.strokeStyle = "green";
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(lazerX2 , lazerY2 );
    ctx.lineTo(lazerX2 , lazerY2+80);
    ctx.stroke();
    
    if (lazerY2 <= 0){
        lazershoot2 = false;
        lazerY2 = 0;
    } 
  } if (lazerY2 >= 1500){
    lazerY2 = 0;
  } if (lazerY2 == 0) {
    lazerX2 = ufoX2 + 50;
    lazerY2 = ufoY2 + 60;
    lazershoot2 = true;
  } 

  
    ctx.drawImage(ranufo, ufoX3, ufoY3, 100,75);
    if (ufoY3 < 1000){
      ufoY3 += 1;
    } if (ufoleft3) {
      ufoX3 -= 2;
    } if (uforight3) {
      ufoX3 += 2;
    } if (ufoX3 >= 875) {
      uforight3 = false;
      ufoleft3 = true;
    } if (ufoX3 <= 25) {
      uforight3 = true;
      ufoleft3 = false;
    } 
  
  if (copy <= ufoX3+100 && copy >= ufoX3 && lineY <= ufoY3 +100 && lineY >= ufoY3){
    lineY = 0;
    ufoY3 = 0;
    score += 100;
  } else if (copy2 <= ufoX3+100 && copy2 >= ufoX3 && lineY2 <= ufoY3 +100 && lineY2 >= ufoY3) {
    lineY2 = 0;
    ufoY3 = 0;
    score += 100;
  } else if (copy3 <= ufoX3+100 && copy3 >= ufoX3 && lineY3 <= ufoY3 +100 && lineY3 >= ufoY3) {
    lineY3 = 0;
    ufoY3 = 0;
    score += 100;
  } else if (copy4 <= ufoX3+100 && copy4 >= ufoX3 && lineY4 <= ufoY3 +100 && lineY4 >= ufoY3) {
    lineY4 = 0;
    ufoY3 = 0;
    score += 100;
  } else if (copy5 <= ufoX3+100 && copy5 >= ufoX3 && lineY5 <= ufoY3 +100 && lineY5 >= ufoY3) {
    lineY5 = 0;
    ufoY3 = 0;
    score += 100;
  }
  if(lazershoot3){
    lazerY3 += 3;
    ctx.strokeStyle = "green";
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(lazerX3 , lazerY3 );
    ctx.lineTo(lazerX3 , lazerY3+80);
    ctx.stroke();
    
    if (lazerY3 <= 0){
        lazershoot3 = false;
        lazerY3 = 0;
    } 
  } if (lazerY3 >= 1500){
    lazerY3 = 0;
  } if (lazerY3 == 0) {
    lazerX3 = ufoX3 + 50;
    lazerY3 = ufoY3 + 60;
    lazershoot3 = true;
  } 
  //asteroid
  
    ctx.drawImage(ranmeat, meatX, meatY, 100,75);
    if (meatY < 1150){
      meatY += 1;
    } if (meatleft) {
      meatX -= 2;
    } if (meatright) {
      meatX += 2;
    } if (meatX >= 875) {
      meatright = false;
      meatleft = true;
    } if (meatX <= 25) {
      meatright = true;
      meatleft = false;
    } 
  
  if (copy <= meatX+100 && copy >= meatX && lineY <= meatY +100 && lineY >= meatY){
    lineY = 0;
    meatY = 0;
    score += 50;
  } else if (copy2 <= meatX+100 && copy2 >= meatX && lineY2 <= meatY +100 && lineY2 >= meatY) {
    lineY2 = 0;
    meatY = 0;
    score += 50;
  } else if (copy3 <= meatX+100 && copy3 >= meatX && lineY3 <= meatY +100 && lineY3 >= meatY) {
    lineY3 = 0;
    meatY = 0;
    score += 50;
  } else if (copy4 <= meatX+100 && copy4 >= meatX && lineY4 <= meatY +100 && lineY4 >= meatY) {
    lineY4 = 0;
    meatY = 0;
    score += 50;
  } else if (copy5 <= meatX+100 && copy5 >= meatX && lineY5 <= meatY +100 && lineY5 >= meatY) {
    lineY5 = 0;
    meatY = 0;
    score += 50;
  }

  //ship
  shipX += shipXspeed;
  ctx.drawImage(shipcont, shipX, 1300, 100,100)

  //HUD
  ctx.lineWidth = 50;
  ctx.strokeStyle = "grey";
  ctx.beginPath();
  ctx.moveTo(0, 0); //set draw location
  ctx.lineTo(1000, 0); // draw from current to 700, 150
  ctx.lineTo(1000, 1500);
  ctx.lineTo(0, 1500);
  ctx.lineTo(0, 0);
  ctx.stroke(); 
  ctx.fillStyle = "grey";
  ctx.fillRect(400, 25, 300, 50); //draw filled square
  ctx.fillRect(0, 0, 375, 70); //draw filled square

  //score
  ctx.font = "42px Comic Sans Ms";
  ctx.fillStyle = "white";
  ctx.fillText("Score:" + score , 425, 50);

  // high score
  if (score > highscore){
    highscore = score;
  }
  ctx.font = "42px Comic Sans Ms";
  ctx.fillStyle = "white";
  ctx.fillText("High Score:" + highscore , 25, 50);

  //Health?
  if (lazerX +20<= shipX+100 && lazerX +20>= shipX && lazerY +80<= 1400 && lazerY +80>= 1300 ||
     lazerX +20<= shipX+100 && lazerX +20>= shipX && lazerY <= 1400 && lazerY >= 1300 ||
      lazerX <= shipX+100 && lazerX >= shipX && lazerY +80<= 1400 && lazerY +80>= 1300) {
    lazerY = 1501;
    health -= 10;
      }if (lazerX2 +20<= shipX+100 && lazerX2 +20>= shipX && lazerY2 +80<= 1400 && lazerY2 +80>= 1300 ||
      lazerX2 +20<= shipX+100 && lazerX2 +20>= shipX && lazerY2 <= 1400 && lazerY2 >= 1300 ||
      lazerX2 <= shipX+100 && lazerX2 >= shipX && lazerY2 +80<= 1400 && lazerY2 +80>= 1300) {
     lazerY2 = 1501;
     health -= 10; 
    } if (lazerX3 +20<= shipX+100 && lazerX3 +20>= shipX && lazerY3 +80<= 1400 && lazerY3 +80>= 1300 ||
      lazerX3 +20<= shipX+100 && lazerX3 +20>= shipX && lazerY3 <= 1400 && lazerY3 >= 1300 ||
      lazerX3 <= shipX+100 && lazerX3 >= shipX && lazerY3 +80<= 1400 && lazerY3 +80>= 1300) {
     lazerY3 = 1501;
     health -= 10; 
      }if(health == 0){
      alive = false;
    }
  



  ctx.fillStyle = "grey";
  ctx.fillRect(shipX, 1425, 100, 25); //draw filled square
  ctx.fillStyle = "red";
  ctx.fillRect(shipX, 1425, health, 25); //draw filled square
  } else {
    ctx.font = "100px Comic Sans Ms";
  ctx.fillStyle = "white";
  ctx.fillText("Game Over", 200, 750);
  dead = true;
  }
  requestAnimationFrame(loop);
}

//document event stuff
//document.addEventListener("keydown", keyDownHandler);
function keyDownHandler (event){
  if (!event.repeat){
    if (event.code == "Space") {
            animate = true;
            //copy = shipX;
            if (lineY == 1290){
             copy = shipX;
            } else if (lineY < 1290 && lineY2 == 1290 ){
                animate2 = true;
                copy2 = shipX;
            } else if (lineY < 1290 && lineY2 < 1290 && lineY3 == 1290){
              animate3 = true;
              copy3 = shipX;
            } else if (lineY < 1290 && lineY2 < 1290 && lineY3 < 1290 && lineY4 == 1290){
            animate4 = true;
            copy4 = shipX;
           } else if (lineY < 1290 && lineY2 < 1290 && lineY3 < 1290 && lineY4 < 1290 && lineY5 == 1290){
            animate5 = true;
            copy5 = shipX;
            } if (dead) {
              health = 100;
    score = 0;
    ufoY = 0;
    ufoY2 = 0;
    ufoY3 = 0;
    meatY = Math.random() * 1000;
    meatX = Math.random() * 1000;
    ufoY = Math.random() * 1000;
    ufoY2 = Math.random() * 1000;
    ufoY3= Math.random() * 1000;
    alive = true;
    dead = false;
            }
          }else if (event.code == "KeyA" && shipX >= 25 || event.code == "ArrowLeft" && shipX >= 25) {
            shipXspeed = -5;
          }else if (event.code == "KeyD" && shipX <= 875 || event.code == "ArrowRight" && shipX <= 875) {
            shipXspeed = 5;
 }}
}
function keyUpHandler(event){
  if (event.code == "KeyA"  || event.code == "ArrowLeft" ) {
    shipXspeed = 0;
  }else if (event.code == "KeyD" || event.code == "ArrowRight" ) {
    shipXspeed = 0;
  }
}
//push functions
