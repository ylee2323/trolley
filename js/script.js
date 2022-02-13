let sec = 0;
let num = 0;

$(".decide").on("click", onePerson);
$(document).ready(function () {
	//시작
	$('#btn_start > button').click(function () {
		sec = setInterval("timer()", 1000);
	});
	
	//중지
	$('#btn_pause button').click(function () {
		clearInterval(sec);
	});
});

function timer() {
	num++;
	$("#span_sec").text(num);
	if (num == 300) { // 5분 되는 시점에 결정
		clearInterval(sec);			
		keepGoing()
	}

}

function onePerson() {
	$(".one img").show();
	$(".five img").hide();	
}

function keepGoing() {
	$(".five img").show();
	$(".one img").hide();	
}