let time = 30; // 시간은 30초
// 버튼 돌아가는 시간
let RockPaperSessiorTime = 200; // 2초씩
let score = 0;
let buttNum = 1; //1은 묵 2는 가위 3 보
let game; // 게임이 시작할때 돌아가는것들
let finish; // 게임 끝날떄 돌아가는것들
function Start() { 
  // Start() 함수
  $("#score").text(score);
  //document.querySelector("#score").textContent;
  $("#time").text(time);
  game = setInterval(RockPaperCheck,RockPaperSessiorTime); // RockPaperCheck를 2초마다 실행시킴
  finish = setInterval(GameTimeCheck,1000); // 1초씩 게임끝날때 돌아감


}
function GameTimeCheck() { 
 if(time > 0) { 
  time = time - 1;
  $("#time").text(time);
} 
 else {
   
   clearInterval(finish);
   clearInterval(game);
   if(confirm("당신은 졌습니다\n 한판 더?")) {
     score = 0;
     time = 30;
     Start();


   }

 } 
}
function EventClick(item) {
  clearInterval(game); // game은 게임 시작할때돌아감 game=setInterval(RockPaperCheck,2초)
  // 즉 우리는 이걸 클릭할때 게임은 멈춰야됌
  
  let computerNum = parseInt($("#computer").attr('class').replace("butt",""));
  // let computerNum = parseInt(document.querySelector('#computer').getAttribute('class').replace("butt",""));
  let userNum = parseInt(item.className.replace("butt",""));
  // let userNum = parseInt(item.className.replace("butt",""));
  sleep(1000);
  if((computerNum-userNum == -2) || (computerNum-userNum == 1)) { 
    alert("당신이 이겼습니다");
    score = score + 1;
    $("#score").text(score);
    // document.querySelector("#score").textContent;

  } // 당신이 이겼을떄 ex.1묵 2 가위 3보 computerNum이 묵을 낸다 내가 3 보를 낸다 1-3 = -2
   // 컴퓨터가 2를 낸다 나는 그럼 1을 낸다 묵 2-1
   // 3-3

   else if((computerNum-userNum) == 0) {
     alert("비겼습니다 !");
   }
   else {
     alert("당신이 졌습니다")
   }

   game = setInterval(RockPaperCheck,RockPaperSessiorTime); // 다시 게임활성화



}
function RockPaperCheck() { 
  $("#computer").removeClass("butt" + buttNum + " opp"); // butt X
  // document.querySelector("#computer").classList.
  buttNum = (buttNum+1 > 3 ? 1 : buttNum+1);
  $("#computer").addClass("butt" + buttNum + " opp"); // butt 다시 추가
  // document.querySelector("#computer").classList.add("butt" + buttNum + " opp")
}

function sleep(num) {
  let now = new Date();
  let stop = now.getTime() + num; // num = 1000
  while(true) { 
    now = new Date();
    if(now.getTime() > stop) return;
  }
}