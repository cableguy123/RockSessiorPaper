var score = 0; //점수
	var time = 30; //남은시간
	var buttNum = 1; //가위:2, 바위:1, 보:3
	var RockPaperScissorsTime = 200; //컴퓨터가 가위바위보 돌리는 시간(0.2초)
	var game; //컴퓨터가 가위바위보 돌리는 setInterval
	var finish; //남은시간 체크하는 setInterval

	// 게임시작
	function Start(){
		$("#score").text(score);
		$("#time").text(time);
	
		game = setInterval(RockPaperScissors, RockPaperScissorsTime);
		finish = setInterval(StartTimeCheck, 1000);
	}

	// 시간줄이기
	function StartTimeCheck(){
		if(time > 0){
			time = time-1; 
			$("#time").text(time);
		}else{
			clearInterval(finish);
			clearInterval(game);
			if(confirm("시간이 종료되었습니다.\n새 게임을 시작하시겠습니까?")){
				score = 0;
				time = 30;
				Start();
			}
		}
	}

	// 가위,바위,보 클릭시
	function EventClick(item){
		clearInterval(game);
		/*
		-- 컴퓨터가 가위바위보 낼때 랜덤으로 내게하기..려고 했으나 주석!
		$("#computer").removeClass($("#computer").attr('class'));
		var num = Math.round(Math.random()*2)+1;
		$("#computer").addClass("butt"+num+" opp");
		*/
		var computerNum = parseInt($("#computer").attr('class').replace("butt",""));
		var userNum = parseInt(item.className.replace("butt",""));
		sleep(1000);
		if((computerNum-userNum) == -2 || (computerNum-userNum) == 1){
			alert("이겼습니다.");
			score = score+1;
			$("#score").text(score);
		}
		else if((computerNum-userNum) == 0){
			alert("비겼습니다.");
		}
		else{
			alert("졌습니다.");
		}

		game = setInterval(RockPaperScissors, RockPaperScissorsTime);
	}

	// 컴퓨터 가위바위보 노출
	function RockPaperScissors(){
		// 가위바위보가 순서대로 노출되되도록 증가값 설정
		$("#computer").removeClass("butt"+buttNum+" opp");
		buttNum = (buttNum+1 > 3 ? 1 : buttNum+1);
		$("#computer").addClass("butt"+buttNum+" opp");
	}
	
	//[1/1000초]
	function sleep(num){
	 var now = new Date();
	   var stop = now.getTime() + num;
	   while(true){
		 now = new Date();
		 if(now.getTime() > stop)return;
	   }
	}
