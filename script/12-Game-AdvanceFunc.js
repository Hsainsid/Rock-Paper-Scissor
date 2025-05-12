let score = JSON.parse (localStorage.getItem('score')) //this done to save scorelocalStrg , and parse used to convert string to object
	|| { win : 0,loose : 0,tie : 0};

	updateScoreElement();

	let isAutoplaying = false;
	let intervalId;
	function autoPlay(){
		if (!isAutoplaying) {
			intervalId = setInterval(function(){
				const playerMove = pickComputerMove();
				playGame(playerMove);
			},1500);
			isAutoplaying = true;
		}else {
			clearInterval(intervalId);
			isAutoplaying = false;
		}
  }

	
	function playGame(playerMove) {
	const computerMove= pickComputerMove();

	let result = '';
	
	if(playerMove === 'scissors'){
		if(computerMove === 'rock'){
		result = 'You loose.';
	}else if(computerMove === 'paper'){
		result = 'You win.';
	}else if(computerMove === 'scissors'){
	result = 'tie.';
	}

	}else if (playerMove === 'paper'){
		if(computerMove === 'rock'){
	result = 'You win.';
	}else if(computerMove === 'paper'){
	result = 'tie.';
	}else if(computerMove === 'scissors'){
	result = 'You loose.';
	}
	
	}else if (playerMove === 'rock'){
		if(computerMove === 'rock'){
	result = 'tie.';
	}else if(computerMove === 'paper'){
	result = 'You loose.';
	}else if(computerMove === 'scissors'){
	result = 'You win.';
	}
	}

	if ( result === 'You win.'){
		score.win += 1;
	}else if ( result === 'You loose.'){
		score.loose += 1;
	}else if ( result === 'tie'){
		score.tie += 1;
	}

	localStorage.setItem('score',JSON.stringify(score) );

	updateScoreElement();  // call out the created function

	document.querySelector('.js-result')
	.innerHTML = result;

	document.querySelector('.js-move')
	.innerHTML = `You picked
	<img src="Rock-paper-scissor-image/${playerMove}-emoji.png" class="move-icon">
	<img src="Rock-paper-scissor-image/${computerMove}-emoji.png" class="move-icon">
	Computer`
}

function updateScoreElement (){
	document.querySelector('.js-score') 
	.innerHTML = `win ${score.win} , loose ${score.loose} , tie ${score.tie}`;
}

	function pickComputerMove() {
	const number = Math.random();

	let computerMove = '';

	if (number >=0 && number < 1/3) {
		computerMove= 'Rock';

	}else if (number > 1/3 && number < 2/3){
		computerMove= 'paper';

	}else if (number > 2/3 && number < 1){
		computerMove= 'scissors';
	}
	return computerMove ;
	}