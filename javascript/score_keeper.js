//selecting all the required fields
var player_1_score = document.getElementById("player_1_display");
var player_2_score = document.getElementById("player_2_display");
var player_1_button = document.getElementById("player_1");
var player_2_button = document.getElementById("player_2");
var reset_button = document.getElementById("reset");
var final_score = document.querySelector("h1");
var max_score_input = document.getElementById("max_score");
var max_score_display = document.getElementById("max_score_display");
var player_1_count = 0;
var player_2_count = 0;
var winning_score = 5;
var isGameOver = false;
// changing the max_Score_possible paragaraph
max_score_input.addEventListener("change",function(){
	if(!isGameOver){
		max_score_display.innerHTML = this.value;
		winning_score = Number(this.value);
	}
	reset();
});	
player_1_button.addEventListener("click",function(){
	if(!isGameOver){
		player_1_count ++;
		if(player_1_count === winning_score){
			isGameOver = true;
			player_1_score.classList.add("green");
		}
		player_1_score.textContent = player_1_count;
	}
});
player_2_button.addEventListener("click",function(){
	if(!isGameOver){
		player_2_count ++;
		if(player_2_count === winning_score){
			isGameOver = true;
			player_2_score.classList.add("green");
		}	
	}
	player_2_score.textContent = player_2_count;
});	
reset_button.addEventListener("click",function(){
	reset();
});
function reset() {
	isGameOver = false;
	player_1_score.classList.remove("green");
	player_2_score.classList.remove("green");
	player_1_score.innerHTML = 0;
	player_2_score.innerHTML = 0;
	player_1_count = 0;
	player_2_count = 0;
	// max_score_input.value = "";
}