
var x = 115;
var y = 160;
//1 - jogar
//2 - regras
//3 - sair
var opcao = 1 
var telaAtiva = 1;
var resposta
function setup() {
  createCanvas(400, 400);
}

function draw() {

  switch(telaAtiva) {
    case 1:
      menu();
      break;
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break; 
    case 4:
      jogar();
      break;
    case 5:
      jogar2()
      break;
    case 6:
      lose()
      break;
    case 7:
      jogar3()
      break;
    case 8:
      jogar4()
      break;
    case 9:
      jogar5()
      break;
    case 10:
      jogar6()
      break;
    case 11:
      jogar7()
      break;
    case 12:
      jogar8()
      break;
    case 13:
      jogar9()
      break;
    case 14:
      jogar10()
      break;
    case 15:
      win()
      break;
  
  
  
  }
  
  
  
  
  
  
  
}

function sair() {
   //R, G, B
  background('pink');
   
  fill('purple');
  stroke('purple');
  strokeWeight(1);
  
  textSize(28);
  fill('purple');
  
  text('saindo...', 40, 55);
  window.close();
}


function regras() {
   //R, G, B
  background('pink');
   
  fill('purple');
  stroke('purple');
  strokeWeight(1);
  
  textSize(25);
  fill('purple');
  text('Uma pergunta será feita, há \napenas uma resposta correta,\nacerte e passe para a próxima,\ncaso errar END GAME', 30, 50);
}

function menu() {
  //R, G, B
  background('pink');
   
  fill('purple');
  stroke('white');
  strokeWeight(1);
  rect(120, 165, 120, 55, 10);
  rect(120, 235, 120, 55, 10);
  rect(120, 305, 120, 55, 10);
  
  strokeWeight(10)
  stroke('black')
  fill('gold')
  textSize(50);
  text('QUIZING', 80, 100)
  
  textSize(32);
  fill('white');
  
  text('Jogar', 140, 200);
  text('Regras', 130, 270);
  text('Sair', 150, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(x, y, 130, 65);
}
function jogar(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(40);
  text('I_from england and\nerika_from japan', 30, 80)
  
  textSize(30);
  fill('white');
  
  text('   is - am', 130, 200);
  text('   are - is', 130, 270);
  text('   am - is', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

  if(opcao==5 && telaAtiva==4 && keyCode==ENTER){
    telaAtiva=6
  }
  if(telaAtiva==4 && opcao==6 && keyCode==ENTER){
  telaAtiva=5
    x = 115;
    y = 160;
    opcao=7;
}
  if(telaAtiva==4 && keyCode==ENTER && opcao==4){
    telaAtiva=6
  }
}
  function jogar2(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(3)
  stroke('black')
  fill('yellow')
  textSize(30);
  text('My friend_a doctor\nand my brothers_lawyers', 20, 80)
  
  textSize(30);
  fill('white');
  
  text('   is - is', 130, 200);
  text('   is - are', 130, 270);
  text('   are- is', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);
     if(telaAtiva==5 && opcao==8 && keyCode==ENTER){
   telaAtiva=7
    x = 115;
    y = 160;
      
     }
  
  
  
  }
 function lose(){
  background('black');
   strokeWeight(10)
  stroke('white')
  fill('black')
  textSize(50);
  text('YOU LOSE \nPRESS F5', 70, 150)
  
 }
  
 function jogar3(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(35);
  text('__Bob and Joanat home now?', 20, 70)
  
  textSize(30);
  fill('white');
  
  text('        are', 130, 200);
  text('        is', 130, 270);
  text('        am', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

 }
function jogar4(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(40);
  text('You__a doctor', 50, 80)
  
  textSize(30);
  fill('white');
  
  text('   are not', 130, 200);
  text('   am not', 130, 270);
  text('   is not', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

 }
function jogar5(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(40);
  text('The cat__thirsty', 60, 80)
  
  textSize(30);
  fill('white');
  
  text('     is not', 130, 200);
  text('     am not', 130, 270);
  text('     are not', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);
    
  if(telaAtiva==9 && keyCode==ENTER && opcao==16){
    telaAtiva=10
  }
  if(telaAtiva==9 && keyCode==ENTER && opcao==17){
  telaAtiva=6
  }
  if(telaAtiva==9 && keyCode==ENTER && opcao==18){
    telaAtiva=6
  }
 }
function jogar6(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(35);
  text('She____video games', 25, 80)
  
  textSize(30);
  fill('white');
  
  text('am playing', 130, 200);
  text('are playing', 130, 270);
  text('is playing', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

  if(telaAtiva==10 && keyCode==ENTER && opcao==21){
    telaAtiva=11
    x=115
    y=160
  }
  if(telaAtiva==10 && keyCode==ENTER && opcao==20){
    telaAtiva=6
  }
  if(telaAtiva==10 && keyCode==ENTER && opcao==19){
    telaAtiva=6
  }


}



function jogar7(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(40);
  text('I____football', 70, 100)
  
  textSize(30);
  fill('white');
  
  text('is playing', 130, 200);
  text('am playing', 130, 270);
  text('are playing', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

  if(telaAtiva==11 && keyCode==ENTER && opcao==23){
    telaAtiva=12
    x=115
    y=160
  }
  if(telaAtiva==11 & keyCode==ENTER && opcao==24){
    telaAtiva=6
  }
  if(telaAtiva==11 && keyCode==ENTER && opcao==22){
    telaAtiva=6
  }
}


function jogar8(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(30);
  text('She is____away from\nthe police', 50, 80)
  
  textSize(30);
  fill('white');
  
  text('Running', 130, 200);
  text('Runnying', 130, 270);
  text('Runing', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

  if(telaAtiva==12 && keyCode==ENTER && opcao==26){
    telaAtiva=13
    x=115
    y=160
  }
  if(telaAtiva==12 && keyCode==ENTER && opcao==27){
    telaAtiva=6
  }
  if(telaAtiva==12 && keyCode==ENTER &&opcao==25){
    telaAtiva=6
  }

}


function jogar9(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(40);
  text('I___am tired today',50, 80)
  
  textSize(30);
  fill('white');
  
  text('feling', 130, 200);
  text('feelling', 130, 270);
  text('feeling', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

  if(telaAtiva==13 && keyCode==ENTER && opcao==30){
    telaAtiva=14
    x=115
    y=160
  }
  if(telaAtiva==13 && keyCode==ENTER && opcao==29){
    telaAtiva=6
  }
  if(telaAtiva==13 && keyCode==ENTER && opcao==28){
    telaAtiva=6
  }
  
}

function jogar10(){
  background(131,29,28);
   
  fill(18,10,143);
  stroke('white');
  strokeWeight(1);
  rect(60, 165, 300, 55, 10);
  rect(60, 235, 300, 55, 10);
  rect(60, 305, 300, 55, 10);
  
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(40);
  text('The population\nof the world is__', 50, 80)
  
  textSize(30);
  fill('white');
  
  text('going', 130, 200);
  text('finding', 130, 270);
  text('growing', 130, 340);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(55, y, 310, 65);

    if(telaAtiva==14 && keyCode==ENTER  && opcao==31){
      telaAtiva=6
    }
  if(telaAtiva==14 && keyCode==ENTER && opcao==32){
    telaAtiva=6
  }
  if(telaAtiva==14 && keyCode==ENTER && opcao==33){
    telaAtiva=15
  }

}





function win(){
  background('#daa520');
   
  strokeWeight(5)
  stroke('black')
  fill('yellow')
  textSize(50);
  text('YOU WIN', 80, 150)
  


}



function keyPressed() {
  console.log(keyCode);
  
   if(telaAtiva==14 && opcao==30){
     opcao=31
   }
  
  if(telaAtiva==13 && opcao==26){
     opcao=28
   }
  
  if(telaAtiva==12 && opcao==23){
   opcao=25
 }
  
  if(telaAtiva==11 && opcao==21){
   opcao=22
 }
  
  if(telaAtiva==10 && opcao==16){
    opcao=19
  }
  
  if(telaAtiva==9 && opcao==13){
    opcao=16
  }
  
  if(telaAtiva==8 && opcao==10){
    opcao=13
  }
  if(telaAtiva==8 && keyCode ==ENTER && opcao==13){
    telaAtiva=9
  }
  if(telaAtiva==8 && keyCode==ENTER && opcao==14){
    telaAtiva=6
  }
  if(telaAtiva==8 && keyCode==ENTER && opcao==15){
    telaAtiva=6
  }
  
  if(telaAtiva==7 && opcao==8){
    opcao=10
  }
  if(telaAtiva==7 && opcao==10 && keyCode==ENTER){
    telaAtiva=8
  }
  
  if(telaAtiva==7 && opcao==11 && keyCode==ENTER){
    telaAtiva=6
  }
  if(telaAtiva==7 && opcao==12 && keyCode==ENTER){
    telaAtiva=6
  }
  
  if(telaAtiva==4 && opcao==1){
   opcao=4
 }
  
  if(telaAtiva==5 && opcao==6){
   opcao=7
 }
  
   if(telaAtiva==5 && keyCode==ENTER && opcao==7){
   telaAtiva=6
   }
  if(telaAtiva==5 && keyCode==ENTER && opcao==9){
    telaAtiva=6
  }
  
  if(telaAtiva==4 && opcao==1 && keyCode == ENTER)
      telaAtiva=1
     
  if (keyCode === DOWN_ARROW && telaAtiva==4) {
    if(y<300) {
     y+=70;
       if(opcao==4)
           opcao=5;
       else 
          if(opcao==5)
             opcao=6; 
    }
    
 }else if (keyCode === UP_ARROW && telaAtiva==4) {
   if(y>200) {
       y-=70;
       if(opcao==6) {
         opcao=5;
       } else { 
         if(opcao==5) {
           opcao=4;
         }
       }
    }
  }
  
  
  if(telaAtiva==1 && opcao==5 && keyCode==ENTER){
    telaAtiva=2
  }
  
  
  if(telaAtiva==2 || telaAtiva==3)
      telaAtiva=1;
  
  if (keyCode === ENTER && telaAtiva==1) 
      telaAtiva=opcao;
  
  if(telaAtiva==1 && opcao==1 && keyCode === ENTER)
      telaAtiva=4
     
  if (keyCode === DOWN_ARROW && telaAtiva==1) {
    if(y<300) {
       y+=70;
       if(opcao==1)
           opcao=2;
       else 
          if(opcao==2)
             opcao=3; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==1) {
    if(y>200) {
       y-=70;
       if(opcao==2) {
         opcao=1;
       } else { 
         if(opcao==3) {
           opcao=2;
         }
       }
    }
   
  }
  
  if (keyCode === DOWN_ARROW && telaAtiva==7) {
    if(y<300) {
       y+=70;
       if(opcao==10)
           opcao=11;
       else 
          if(opcao==11)
             opcao=12; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==7) {
    if(y>200) {
       y-=70;
       if(opcao==12) {
         opcao=11;
       } else { 
         if(opcao==11) {
           opcao=10;
         }
       }
    }
   
  }
   if (keyCode === DOWN_ARROW && telaAtiva==5) {
    if(y<300) {
       y+=70;
       if(opcao==7)
           opcao=8;
       else 
          if(opcao==8)
             opcao=9; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==5) {
    if(y>200) {
       y-=70;
       if(opcao==8) {
         opcao=7;
       } else { 
         if(opcao==9) {
           opcao=8;
         }
       }
    }
   
  }
   if (keyCode === DOWN_ARROW && telaAtiva==8) {
    if(y<300) {
       y+=70;
       if(opcao==13)
           opcao=14;
       else 
          if(opcao==14)
             opcao=15; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==8) {
    if(y>200) {
       y-=70;
       if(opcao==15) {
         opcao=14;
       } else { 
         if(opcao==14) {
           opcao=13;
         }
       }
    }
   
  }
     if (keyCode === DOWN_ARROW && telaAtiva==9) {
    if(y<300) {
       y+=70;
       if(opcao==16)
           opcao=17;
       else 
          if(opcao==17)
             opcao=18; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==9) {
    if(y>200) {
       y-=70;
       if(opcao==18) {
         opcao=17;
       } else { 
         if(opcao==17) {
           opcao=16;
         }
       }
    }
   
  }
     if (keyCode === DOWN_ARROW && telaAtiva==10) {
    if(y<300) {
       y+=70;
       if(opcao==19)
           opcao=20;
       else 
          if(opcao==20)
             opcao=21; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==10) {
    if(y>200) {
       y-=70;
       if(opcao==21) {
         opcao=20;
       } else { 
         if(opcao==20) {
           opcao=19;
         }
       }
    }
   
  }
     if (keyCode === DOWN_ARROW && telaAtiva==11) {
    if(y<300) {
       y+=70;
       if(opcao==22)
           opcao=23;
       else 
          if(opcao==23)
             opcao=24; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==11) {
    if(y>200) {
       y-=70;
       if(opcao==24) {
         opcao=23;
       } else { 
         if(opcao==23) {
           opcao=22;
         }
       }
    }
   
  }
     if (keyCode === DOWN_ARROW && telaAtiva==12) {
    if(y<300) {
       y+=70;
       if(opcao==25)
           opcao=26;
       else 
          if(opcao==26)
             opcao=27; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==12) {
    if(y>200) {
       y-=70;
       if(opcao==27) {
         opcao=26;
       } else { 
         if(opcao==26) {
           opcao=25;
         }
       }
    }
   
  }
     if (keyCode === DOWN_ARROW && telaAtiva==13) {
    if(y<300) {
       y+=70;
       if(opcao==28)
           opcao=29;
       else 
          if(opcao==29)
             opcao=30; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==13) {
    if(y>200) {
       y-=70;
       if(opcao==30) {
         opcao=29;
       } else { 
         if(opcao==29) {
           opcao=28;
         }
       }
    }
   
  }
     if (keyCode === DOWN_ARROW && telaAtiva==14) {
    if(y<300) {
       y+=70;
       if(opcao==31)
           opcao=32;
       else 
          if(opcao==32)
             opcao=33; 
    }
    
  } else if (keyCode === UP_ARROW && telaAtiva==14) {
    if(y>200) {
       y-=70;
       if(opcao==33) {
         opcao=32;
       } else { 
         if(opcao==32) {
           opcao=31;
         }
       }
    }
   
  }
  console.log("opcao: "+opcao);
  console.log("telaAtiva: "+telaAtiva);
}
